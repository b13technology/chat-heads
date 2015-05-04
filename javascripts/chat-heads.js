// MD5 generator to create hash for images from gravatar
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);

(function () {
    'use strict';

    var eventHandlers = {};
    var $ = document.querySelector.bind(document);
    var removeClass = function (el, className) {
        el.className = el.className.replace(className, '');
        return el;
    };
    var addClass = function (el, className) {
        if (el.className.indexOf(className) === -1) {
            el.className += ' ' + className;
        }
        return el;
    };

    window.ChatHead = (function () {

        var headClass = 'chat-head';
        var startY = 100;
        var startX = 0;
        var headTemplate =
            '<div class="chat-head-img-container">'
                + '<span class="unread"></span>'
                + '<img class="chat-head-img" src="" />'
            + '</div>';


        var baseImgUrl = 'http://www.gravatar.com/avatar/';

        var ChatHead = function (options) {
            this.email = options.email.trim();
            this.id = md5(this.email.toLowerCase());
            this.name = options.name.trim();
            this.img = options.img || (this.id + '?s=100');
            this.unread = 0;
            this.order = options.order;
            this.messages = [];
        };

        ChatHead.prototype.render = function () {
            var y = startY;// - (this.order*5);
            var x = startX;
            var headNode = document.createElement("div");
            headNode.className = headClass;
            headNode.setAttribute('data-head-id', this.id);
            headNode.setAttribute('data-y', y);
            headNode.innerHTML = headTemplate;
            headNode.querySelector('.chat-head-img').src = baseImgUrl + this.img;
            if (this.unread) {
                addClass(headNode, 'unread');
                var text = document.createTextNode(this.unread.toString());
                headNode.querySelector('.unread').appendChild(text);
            }
            else {
                removeClass(headNode, 'unread');
            }
            headNode.style.webkitTransform =
                  headNode.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';
            this.el = headNode;
            this.testViewport();
            return this;
        };

        ChatHead.prototype.testViewport = function () {
            if (window.innerWidth < 400) {
                addClass(this.el, 'small-viewport');
                this.smallViewport = true;
            }
            return this;
        };

        ChatHead.prototype.active = function (isActive, pos) {
            var target = this.el;

            if (isActive) {
                addClass(target, 'active');
                var x = -80 + (this.order * -90);
                target.style.webkitTransition =
                    target.style.transition =
                        'transform 0.2s ease';

                target.style.webkitTransform =
                  target.style.transform =
                    'translate(' + x + 'px, 7px)';
                target.setAttribute('data-x', x);
                target.setAttribute('data-y',  7);
            }
            else {
                var x = pos ? pos.x : 0;
                var y = pos ? pos.y : 100;

                removeClass(target, 'active');
                target.style.webkitTransform =
                    target.style.transform =
                        'translate('+x+'px, '+y+'px)';
                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }
            return this;
        };

        ChatHead.prototype.message = function (message) {
            this.unread = this.unread + 1;
            this.messages.push(message);
            var el = this.el
                .querySelector('.unread');
            el.innerHTML = '';
            el.appendChild(document.createTextNode(this.unread > 10 ? '10+' : this.unread));
            return this;
        };

        ChatHead.prototype.read = function () {
            this.unread = 0;
            this.el
                .querySelector('.unread').innerHTML = '';
            return this;
        };

        ChatHead.prototype.send = function () {

        };

        return ChatHead;
    }());

    window.ChatHeads = (function () {
        var chatTemplate =
           '<ul class="chat-messages"></ul>'

        var userForm =
            '<form id="user-form">'
                + '<div class="user-input"><label for="chat-head-user-email">email</label><input id="chat-head-user-email" required class="user-email-input type="text" /></div>'
                + '<div class="user-input"><label for="chat-head-user-name">name</label><input id="chat-head-user-name" class="user-input user-name-input" type="text" /></div>'
                + '<input class="ok start-button" type="submit" value="OK" />'
            +'</form>'

        var chatForm =
             '<form id="chat-submit">'
                  + '<input required class="chat-text" type="text" placeholder="Write a message" />'
                  + '<input type="submit" value="send" class="enter" />'
              + '</form>';

        var attribution = '<div class="attribution">chat-heads.js</div>';


        var containerClass = '.chat-head-container';
        var headClass = '.chat-head';

        var turn = 'you';
        var me = '<p class="name me">Me:</p>';
        var you = '<p class="name you"></p>';

        var ChatHeads = function (options) {
            this.options = options || {};
            this.container = $(containerClass);
            this.inertia();
            this.heads = {};
        };

        ChatHeads.prototype.inertia = function () {

            interact(headClass)
              .draggable({
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                restrict: {
                  restriction: containerClass,
                  endOnly: true,
                  elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                onmove: this.onMove.bind(this),
                onend: this.onMoveEnd.bind(this)
              })
              .on('tap', this.onTap.bind(this));

              return this;
        };

        ChatHeads.prototype.onMoveEnd = function (e) {};

        ChatHeads.prototype.onMove = function (e) {
            var movedTarget = e.target;
            this.bringToFront(movedTarget);
            var movedElX = movedTarget.getAttribute('data-x');
            var movedElY = movedTarget.getAttribute('data-y');

            if (this.active()) {
                this.active(false);
                removeClass(this.container, 'active');
                this.each(function (head) {
                    head.active(false, {
                        x: movedElX,
                        y: movedElY
                    });
                });
            }

            this.each(function (head) {
                var target = head.el;

                // keep the dragged position in the data-x/data-y attributes
                var x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx;
                var y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;
                target.style.webkitTransition =
                    target.style.transition = 'none';
                  // translate the element
                target.style.webkitTransform =
                  target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);

            }.bind(this));

            return this;
        };

        ChatHeads.prototype.each = function (iterator) {

            Object.keys(this.heads).forEach(function (id) {
                iterator(this.heads[id]);
            }.bind(this));

            return this;
        };

        ChatHeads.prototype.onTap = function (e) {
            var target = e.currentTarget;
            var isActive = this.active();
            var head = this.get(target);

            if (!isActive) {
                // head clicked while heads are in side position
                this.active(true);
                addClass(this.container, 'active');
                this.each(function (head) {
                    head.active(true);
                });
                this.createMessages(head);
            }
            else {
                this.active(false);
                removeClass(this.container, 'active');
                this.each(function (head) {
                    head.active(false);
                });
            }

            return this;
        };

        ChatHeads.prototype.onSubmit = function (e, head) {
            e.preventDefault();
            var target = e.currentTarget;
            var msg = {};
            msg.content = target.childNodes[0].value;
            if (this.options.requireEmail) {
                msg.from = {
                    name: 'Jimbo',
                    email: this.fromEmail
                };
            }
            msg.to = {
                name: head.name,
                email: head.email,
                id: head.id
            };
            this.renderMessage(msg);
            target.childNodes[0].value = '';
            this.trigger('message', msg);

            return false;
        };

        ChatHeads.prototype.onUserSubmit = function (e, head) {
            var target = e.currentTarget;
            var email = target.querySelector('#chat-head-user-email');
            var name = target.querySelector('#chat-head-user-name');

            this.container.querySelector('#user-form').style.display = 'none';
            this.container.querySelector('#chat-submit').style.display = 'block';

            this.trigger('user:logon', {
                email: email,
                name: name
            });
            return false;
        };

        ChatHeads.prototype.renderMessage = function (msg) {
            var textContainer = this.chatContainer.querySelector('.chat-messages');
            var message = '<p class="line">' + msg.content + '</p>';

            if (this.lastMessageAuthor === msg.from.name) {
                var child = textContainer.lastChild;
                child.innerHTML += message;
            }
            else {
                var messageEl = document.createElement('li');
                messageEl.innerHTML += '<p class="name">' + msg.from.name + ':</p>';
                messageEl.innerHTML += message;
                textContainer.appendChild(messageEl);
            }

            this.lastMessageAuthor = msg.from.name;
            textContainer.scrollTop = textContainer.scrollHeight;
            return this;
        };

        ChatHeads.prototype.createMessages = function (head) {
            if (this.chatContainer) {
                return this;
            }
            var chatContainer = document.createElement('div');
            chatContainer.className = 'chat';
            var template = chatTemplate;
            if (this.options.requireEmail) {
                template += userForm;
            }
            template += chatForm;
            template += attribution;

            chatContainer.innerHTML = template;
            this.container.appendChild(chatContainer);

            this.chatContainer = chatContainer;

            var userForm = chatContainer.querySelector('#user-form');
            userForm.addEventListener('submit', function (e) {
                this.onUserSubmit(e, head);
            }.bind(this), false);

            this.chatForm = chatContainer.querySelector('#chat-submit');
            this.chatForm.style.display = this.options.requireEmail ? 'none' : 'block';
            this.chatForm.addEventListener("submit", function (e) {
                this.onSubmit(e, head)
            }.bind(this), false);
            return this;
        };

        ChatHeads.prototype.bringToFront = function (head) {
            this.each(function (head) {
                head.el.style.zIndex = 9998;
            }.bind(this));
            this.get(head).el.style.zIndex = 9999;
            return this;
        };

        ChatHeads.prototype.get = function (head) {
            if (head instanceof HTMLElement) {
                head = head.getAttribute('data-head-id');
            }
            return this.heads[head.id || head];
        };

        ChatHeads.prototype.active = function () {

            if (arguments.length) this._active = arguments[0];
            return !!this._active;
        };

        ChatHeads.prototype.start = function () {
            // addClass(this.head, 'shown');
            return this;
        };

        ChatHeads.prototype.addHead = function (head) {
            head.order = Object.keys(this.heads).length;
            this.heads[head.id] = head;

            this.container.appendChild(head.render().el);
            return head;
        };

        ChatHeads.prototype.removeHead = function (head) {
            delete this.heads[head.id];
            return this;
        };

        ChatHeads.prototype.message = function (message) {
            this.renderMessage({
                from: {
                    name: message.from
                },
                content: message.content
            });
            // this.bringToFront(forHead);
            return this;
        };

        // a small bit of event handling
        ChatHeads.prototype.on = function (eventName, callback) {
            (eventHandlers[eventName] = eventHandlers[eventName] || []).push(callback);
            return this;
        };
        ChatHeads.prototype.off = function (eventName, callback) {
            if (!callback) {
                delete eventHandlers[eventName];
            }
            else {
                for (var i = 0, events = eventHandlers[eventName]; events && events && events[i]; i++) {
                    if (events[i] === callback) {
                        events.splice(i--, 1);
                    }
                }
            }
            return this;
        };
        ChatHeads.prototype.trigger = function (eventName) {
            for (var events = eventHandlers[eventName], i = 0; events && events[i]; i++) {
                events[i].apply(this, events.slice.call(arguments, 1));
            }
            return this;
        };
        return ChatHeads;

    }());


    var chat = window.chat =  new ChatHeads({
        requireEmail: true
    });

    setTimeout(function () {
       chat.start();
    }, 1000);

    chat.addHead(new ChatHead({
        name: 'James',
        email: 'james@ivings.org.uk'
    }));

    chat.on('message', function (msg) {
        console.log(msg);
    });

    chat.on('user:logon', function (user) {

    });

}());