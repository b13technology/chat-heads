var pool = require('../config/db');

module.exports = {
  up: function (next) {
    var sql =
      " CREATE TABLE IF NOT EXISTS `user` ( " +
      "  `id` INT NOT NULL AUTO_INCREMENT, " +
      "  `username` VARCHAR(255) NOT NULL, " +
      "  `password` VARCHAR(255) NOT NULL, " +
      "  `email` VARCHAR(255) NOT NULL, " +
      "  PRIMARY KEY (`id`), " +
      "  UNIQUE INDEX `username_UNIQUE` (`username` ASC)) " +
      " ENGINE = InnoDB; ";

    pool.query(sql, next);
  },
  down: function (next) {
    var sql =
      " DROP TABLE IF EXISTS `user`";

    pool.query(sql, next);
  }
};
