var express = require('express');
var User = require('../model/User');
var router = express.Router();
var _ = require('lodash');
var pool = require('../config/db');
var messageRouter = require('../messageRouter');

function makeToken(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

router.post('/register',
  function (req, res, next) {
    // name => (id=>name)
    var newClient = {};
    newClient.name = req.body.name;
    newClient.token = makeToken(10);
    pool.query('INSERT INTO `client` SET ? ;',
      newClient,
      function (err, results) {
        newClient.id = results.insertId;
        res.json(newClient);
      }
    );
  });

function loadClient(id, token, done) {
  pool.query(
    'SELECT * FROM `client` where id=? and token=? LIMIT 1;',
    [id, token],
    function (err, results) {
      done(err, (!err && results.length) ? results[0] : null);
    });
}

router.get('/status',
  function (req, res, next) {
    loadClient(
      req.query.id, req.query.token,
      function (err, client) {
        if (err) throw err;
        if (client) {
          pool.query(
            'SELECT count(*) as messageCount FROM `message` where clientId=?;',
            [client.id],
            function (err, results) {
              res.json({
                isRegistered: true,
                hasChats: results[0].messageCount > 0,
                client: client
              });
            });
        } else {
          res.json({
            isRegistered: false,
            hasChats: false,
            client: {}
          });
        }
      }
    );
  });

router.get('/messages',
  function (req, res, next) {
    // id,token => messages
    loadClient(req.query.id, req.query.token, function (err, client) {
        if (client) {
          pool.query(
            'SELECT * FROM `message` where clientId=?;',
            [client.id],
            function (err, results) {
              res.json(results);
            });
        } else {
          res.status(403).json({message: 'Bad id or token'});
        }
      }
    );
  });

router.post('/messages',
  function (req, res, next) {
    // id,token => messages
    loadClient(req.query.id, req.query.token, function (err, client) {
        if (client) {
          var message = _.pick(req.body, ['userId', 'message']);
          message.clientId = client.id;
          message.timestamp = new Date();
          message.isFromClient = true;
          pool.query('INSERT INTO `message` SET ? ;',
            message,
            function (err, results) {
              if (err) throw err;
              message.id = results.insertId;
              res.json(message);
              messageRouter.emit('clientMessage', message);
            });
        } else {
          res.json({});
        }
      }
    );
  });


router.get('/:id',
  function (req, res, next) {
    pool.query(
      'SELECT * FROM `client` where id=? LIMIT 1;',
      [req.params.id],
      function (err, results) {
        if (results.length) {
          res.json(_.pick(results[0], ['id', 'name']))
        }
        else {
          res.status(404).json({'message': 'User not found'});
        }
      });
  });

module.exports = router;
