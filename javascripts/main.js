'use strict';

(function(){
  var socket = io();
  var clientStatus = null;

  socket.on('userMessage', function (data) {
      console.log('userMessage: ', data);
  });

  socket.on('clientMessage', function (data) {
      console.log('clientMessage: ', data);
  });

  if(localStorage.chatHeadsClientStatus){
    try {
      clientStatus = JSON.parse(localStorage.chatHeadsClientStatus);
    } catch (e){}
  }

  var chat = window.chat = new ChatHeads({
    requireEmail: (clientStatus ? false : true)
  });

  chat.addHead(new ChatHead({
    name: 'James',
    email: 'james@ivings.org.uk'
  }));

  if(clientStatus) {
    chat.setUser({
      name: clientStatus.client.name,
      email: clientStatus.client.email
    });
    socket.emit('setId', {
      userId: 1,
      clientId: clientStatus.client.id
    });
  }

  chat.on('message', function (msg) {
    console.log(msg);
    $.post('/-/client/messages'
      + '?id=' + encodeURIComponent(clientStatus.client.id)
      + '&token=' + encodeURIComponent(clientStatus.client.token)
      , {
        message: msg.content,
        // userId: +$stateParams.id
        userId: 1,
        from: msg.from,
        to: msg.to
      }, function (res) {
        // console.log(res);
      }
    );
  });

  chat.on('user:logon', function (user) {
    console.log('login', user);
    $.post('/-/client/register', user, function(result){
        console.log('result', result);
        clientStatus = {
          loaded: true,
          isRegistered: true,
          hasChats: false,
          client: result
        };
        socket.emit('setId', {
          userId: 1,
          clientId: clientStatus.client.id
        });
        localStorage.chatHeadsClientStatus = JSON.stringify(clientStatus);
    });
  });
  
}());