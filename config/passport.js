var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User');

passport.serializeUser(User.serialize);
passport.deserializeUser(User.deserialize);

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findByUsername(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Unknown user ' + username});
      }
      if (!User.verifyPassword(password, user)) {
        return done(null, false, {message: 'Invalid password'});
      }
      return done(null, user);
    })
  }
));

module.exports = passport;
