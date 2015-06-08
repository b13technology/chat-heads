var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var auth = require('./routes/auth');
var profile = require('./routes/profile');
// var profiles = require('./routes/profiles');
var client = require('./routes/client');
// var sms = require('./routes/twilio');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
// app.use('/content', express.static(path.join(__dirname, 'content')));

app.use('/javascripts', express.static(path.join(__dirname, 'javascripts')));
app.use('/stylesheets', express.static(path.join(__dirname, 'stylesheets')));

var sessionMiddleware = require('./middleware/session');
app.use(sessionMiddleware);

var passport = require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());


app.use('/-/auth/', auth);
app.use('/-/profile/', profile);
// app.use('/-/profiles/', profiles);
app.use('/-/client/', client);
// app.use('/-/sms/', sms);

app.get('/', function (req, res, next) {
  res.render('app');
});
  
app.get('/user', function(req, res){
  res.render('user');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
