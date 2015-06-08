var pool = require('../config/db');

module.exports = {
  up: function (next) {
    var sql =
      " CREATE TABLE IF NOT EXISTS `client` ( " +
      "  `id` INT NOT NULL AUTO_INCREMENT, " +
      "  `name` VARCHAR(255) NOT NULL, " +
      "  `token` VARCHAR(255) NOT NULL, " +
      "  PRIMARY KEY (`id`)) " +
      " ENGINE = InnoDB; ";

    pool.query(sql, next);
  },
  down: function (next) {
    var sql =
      " DROP TABLE IF EXISTS `client`";

    pool.query(sql, next);
  }
};
