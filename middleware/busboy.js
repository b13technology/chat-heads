'use strict';

var Busboy = require('busboy');
var tmp = require('tmp');
var fs = require('fs');


module.exports = function busboyMiddleware(req, res, next) {
  var busboy = new Busboy({headers: req.headers});
  var fields = {};
  var files = [];
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
      if (err) throw err;

      files.push({
        fieldname: fieldname,
        filename: filename,
        encoding: encoding,
        mimetype: mimetype,
        tmpPath: path,
        tmpFd: fd,
        tmpCleanupCallback: cleanupCallback
      });

      file.pipe(fs.createWriteStream(null, {fd: fd}));
    });

  });

  busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
    fields[fieldname] = val;
  });

  busboy.on('finish', function () {
    req.files = files;
    req.body = fields;
    next();
  });

  return req.pipe(busboy);
};
