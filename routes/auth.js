var express = require('express');
var passport = require('passport');
var User = require('../model/User');
var router = express.Router();
var _ = require('lodash');
var pool = require('../config/db');

var profile = User.privateProfile;

// curl -v -H "Content-Type: application/json" \
//  -d '{"username":"user1","password":"pass"}' \
//  http://127.0.0.1:3000/login

router.post('/login',
  function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.status(400).json(info);
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        // pool.query(
        //   'SELECT count(*) as messageCount FROM `message` where userId=?;',
        //   [user.id],
        //   function (err, results) {
        //     res.json({
        //       isAuthenticated: true,
        //       hasChats: results[0].messageCount > 0,
        //       user: profile(user)
        //     });
        //   });
        pool.query(
          'SELECT * FROM `message` where userId=?;',
          [user.id],
          function (err, results) {
            res.json({
              isAuthenticated: true,
              user: profile(user),
              messages: results
            });
          });
      });
    })(req, res, next);
  }
);

router.post('/logout', function (req, res) {
  req.logout();
  res.status(204).end();
});

// curl -v -H "Content-Type: application/json" \
//   -d '{"username":"test2","password":"pass", "email":"test2@example.com"}' \
//   http://127.0.0.1:3000/register

router.post('/register', function (req, res, next) {
  User.register(req.body, function (err, user) {
    if (err) {
      return res.status(400).json(err)
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        isAuthenticated: true,
        hasChats: false,
        user: profile(user)
      });
    });
  });
});


router.get('/status', function (req, res) {
  if (req.isAuthenticated()) {
    pool.query(
      'SELECT count(*) as messageCount FROM `message` where userId=?;',
      [req.user.id],
      function (err, results) {
        res.json({
          isAuthenticated: true,
          hasChats: results[0].messageCount > 0,
          user: profile(req.user)
        });
      });
  } else {
    res.json({
      isAuthenticated: false,
      hasChats: false,
      user: {}
    });
  }
});


module.exports = router;
