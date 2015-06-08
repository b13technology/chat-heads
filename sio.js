var sio = require('socket.io');
var cookieParser = require('cookie-parser');

module.exports = function (server) {
  var io = sio(server);
  var messageRouter = require('./messageRouter');

  function em(fn) {
    return function (socket, next) {
      fn(socket.request, socket.request.res, next);
    }
  }

  var cookieParserMiddleware = cookieParser();
  var sessionMiddleware = require('./middleware/session');

  io.use(em(cookieParserMiddleware));
  io.use(em(sessionMiddleware));

  var passport = require('./config/passport');
  io.use(em(passport.initialize()));
  io.use(em(passport.session()));


//   var onlineUsers = {};
//   var onlineClients = {};

  io.on('connection', function (socket) {
    console.log('socket.id', socket.id);
    var userId;
    var clientId;

    // message from user
    var userMessageListener = function (message) {
      console.log('userMessageListener', message);
      if (clientId == message.clientId) {
        socket.emit('userMessage', message);
      }
    };

    // message from client
    var clientMessageListener = function (message) {
      if (userId == message.userId) {
        socket.emit('clientMessage', message);
      }
    };

    console.log('         socket.request.isAuthenticated()', socket.request.isAuthenticated());
    if (socket.request.isAuthenticated()) {
      userId = socket.request.user.id;
      messageRouter.addListener('clientMessage', clientMessageListener);
    }

    socket.on('clientSubscribe', function (client) {
      if (clientId) {
        messageRouter.removeListener('userMessage', userMessageListener);
      }
      clientId = client.id;
      messageRouter.addListener('userMessage', userMessageListener);
    });

    socket.on('disconnect', function () {
      if (userId) {
        messageRouter.removeListener('clientMessage', clientMessageListener);
      }
      if (clientId) {
        messageRouter.removeListener('userMessage', userMessageListener);
      }
    });
  });

  return io;
};
