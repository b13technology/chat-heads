var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'chat_heads',
  password: 'chat_heads'
});

pool.on('connection', function (connection) {
  connection.query('USE `chat_heads`;');
});

module.exports = pool;
