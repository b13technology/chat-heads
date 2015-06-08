'use strict';

module.exports = require('express-session')({
  secret: 'some secret to be changed later',
  resave: false,
  saveUninitialized: false
});
