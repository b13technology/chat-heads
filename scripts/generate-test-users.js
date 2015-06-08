'use strict';

var pool = require('../config/db');
var bcrypt = require('bcrypt');

var password = bcrypt.hashSync('pass', 10);

function userByNumber(number) {
  return {
    'username': 'test_user' + number,
    'password': password,
    'email': 'test_user' + number + '@example.com',
  };
}

function addUser(number, cb) {
  var user = userByNumber(number);
  pool.query('INSERT INTO `user` SET ? ;',
    user,
    function (err, results) {
      console.log('added ' + user.username);
      cb();
    }
  );
}

(function(){
  addUser(1, function(){
    process.exit(0);
  });
})();
