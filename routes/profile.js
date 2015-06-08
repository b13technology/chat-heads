var express = require('express');
var User = require('../model/User');
var router = express.Router();
var _ = require('lodash');
var pool = require('../config/db');

var ensureAuthenticated = require('../middleware/ensureAuthenticated');
var messageRouter = require('../messageRouter');

// router.post('/update',
//   ensureAuthenticated,
//   function (req, res, next) {
//     var profileUpdates = _.pick(req.body, [
//     ]);
//     User.updateProfile(
//       req.user,
//       profileUpdates,
//       function (err, user) {
//         res.status(202).json(User.privateProfile(user));
//       });
//   });


router.get('/messages',
  ensureAuthenticated,
  function (req, res, next) {
    pool.query(
      'SELECT * FROM `message` where userId=?;',
      [req.user.id],
      function (err, results) {
        res.json(results);
      });
  });

router.post('/messages',
  ensureAuthenticated,
  function (req, res, next) {

    var message = _.pick(req.body, ['clientId', 'message']);
    message.userId = req.user.id;
    message.timestamp = new Date();
    message.isFromClient = false;
    pool.query('INSERT INTO `message` SET ? ;',
      message,
      function (err, results) {
        if (err) throw err;
        message.id = results.insertId;
        res.json(message);
        messageRouter.emit('userMessage', message);
      });
  });

module.exports = router;
