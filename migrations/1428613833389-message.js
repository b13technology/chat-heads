var pool = require('../config/db');

module.exports = {
  up: function (next) {
    var sql =
      " CREATE TABLE IF NOT EXISTS `message` (" +
      "   `id` INT NOT NULL AUTO_INCREMENT, " +
      "   `isFromClient` INT(1) NOT NULL DEFAULT 0," +
      "   `userId` INT NOT NULL," +
      "   `clientId` INT(11) NOT NULL," +
      "   `timestamp` DATETIME NOT NULL," +
      "   `message` TEXT NOT NULL," +
      "   PRIMARY KEY (`id`)," +
      "   INDEX `fk_message_user1_idx` (`userId` ASC)," +
      "   INDEX `fk_message_client1_idx` (`clientId` ASC)," +
      "   CONSTRAINT `fk_message_user1`" +
      "     FOREIGN KEY (`userId`)" +
      "     REFERENCES `user` (`id`)" +
      "     ON DELETE CASCADE" +
      "     ON UPDATE CASCADE," +
      "   CONSTRAINT `fk_message_client1`" +
      "     FOREIGN KEY (`clientId`)" +
      "     REFERENCES `client` (`id`)" +
      "     ON DELETE CASCADE" +
      "     ON UPDATE CASCADE)" +
      " ENGINE = InnoDB;";

    pool.query(sql, next);
  },
  down: function (next) {
    var sql =
      " DROP TABLE IF EXISTS `message`";

    pool.query(sql, next);
  }
};
