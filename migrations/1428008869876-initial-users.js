var bcrypt = require('bcrypt');
var pool = require('../config/db');

module.exports = {
  up: function (next) {
    //
    //var users = [
    //  [1, 'user1', bcrypt.hashSync('pass', 10), 'user1@example.com'],
    //  [2, 'user2', bcrypt.hashSync('pass', 10), 'user2@example.com']
    //];
    //
    //var columns = ['id', 'username', 'password', 'email'];
    //
    //pool.query('INSERT INTO `user` (??) VALUES ? ;',
    //  [columns, users],
    //  next
    //);
    next();
  },
  down: function (next) {
    //pool.query('DELETE FROM `user` WHERE 1', next);
    next();
  }
};

