var bcrypt = require('bcrypt');
var debug = require('debug')('sybar:User');
var pool = require('../config/db');
var fs = require('fs');
var _ = require('lodash');

function findById(id, done) {
  pool.query('select user.* from user where id=?', [id], function (err, results) {
    if (err) {
      done(err);
    } else {
      if (results.length === 0) {
        done(new Error('User ' + id + ' does not exist'));
      } else {
        done(null, results[0]);
      }
    }
  });
}

function findByUsername(username, fn) {
  pool.query('select user.* from user where username=?', [username], function (err, results) {
    if (err) {
      fn(err);
    } else {
      if (results.length === 0) {
        fn(null, null);
      } else {
        fn(null, results[0]);
      }
    }
  });
}

function findByEmail(email, fn) {
  pool.query('select user.* from user where email=?', [email], function (err, results) {
    if (err) {
      fn(err);
    } else {
      if (results.length === 0) {
        fn(null, null);
      } else {
        fn(null, results[0]);
      }
    }
  });
}

function verifyPassword(password, user) {
  return bcrypt.compareSync(password, user.password);
}

function serializeUser(user, done) {
  done(null, user.id);
}

function deserializeUser(id, done) {
  findById(id, function (err, user) {
    done(null, err ? false : user);
  });
}

function register(form, done) {
  var errors = [];
  if (!form.username) {
    errors.push({username: 'Username is required'});
  }
  if (!form.password) {
    errors.push({password: 'Password is required'});
  }
  if (!form.email) {
    errors.push({email: 'Email is required'});
  }
  if (errors.length) {
    return done(_.assign.apply(_, [{}].concat(errors)));
  }

  findByUsername(form.username, function (err, user) {
    if (err) {
      done(err);
      return;
    }
    if (user) {
      done({username: 'Username already used'});
      return;
    }
    findByEmail(form.email, function (err, user) {
      if (err) {
        done(err);
        return;
      }
      if (user) {
        done({email: 'Email already used'});
        return;
      }
      var newUser = {
        username: form.username,
        password: bcrypt.hashSync(form.password, 10),
        email: form.email
      };

      pool.query('INSERT INTO `user` SET ? ;', newUser,
        function (err, results) {
          newUser.id = results.insertId;
          done(err, newUser);
        }
      );
    });
  });
}

function updateProfile(user, profile, done) {
  pool.query('UPDATE `user` SET ? WHERE `user`.id=?',
    [profile, user.id],
    function (err) {
      if (err) return done(err);
      findById(user.id, done);
    }
  );
}


module.exports = {
  findById: findById,
  findByUsername: findByUsername,
  verifyPassword: verifyPassword,
  serialize: serializeUser,
  deserialize: deserializeUser,
  register: register,
  privateProfile: function privateProfile(user) {
    var profile = _.pick(user, [
      'id',
      'username',
      'email',
    ]);
    return profile;
  },
  publicProfile: function publicProfile(user) {
    var profile = _.pick(user, [
      'id',
      'username',
    ]);
    return profile;
  },
  updateProfile: updateProfile,
};
