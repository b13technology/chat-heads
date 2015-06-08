'use strict';

(function(){
var socket = io();

socket.on('userMessage', function (data) {
    console.log('userMessage: ', data);
});

socket.on('clientMessage', function (data) {
    console.log('clientMessage: ', data);
});
    
angular.module('userModule', [])
    .controller('FormController', ['$scope', '$rootScope', '$http',function($scope, $rootScope, $http) {
        $scope.userData = {
            pass: '',
            username: '',
            remember: false
        };
        if(localStorage.formData){
            $scope.userData = JSON.parse(localStorage.formData);
        }
        console.log('$scope.userData', $scope.userData);
        $scope.login = function(data){
            if(data.remember){
                localStorage.formData = JSON.stringify(data);
                console.log('localStorage', localStorage);
            }
            $http.post('/-/auth/login', {
                username: data.username,
                password: data.pass
            }).then(function (res) {
                if(res.data && res.data.messages){
                    $rootScope.onLogin(res.data.messages);
                }
                
                if (res === false) {
                  $scope.errorMessage = res.message;
                }
            });
        };
    }])
    .controller('UserController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
        $scope.formIsSubmit = false;
        $scope.messages = [];
        $scope.lastClientId = 0;
        $rootScope.onLogin = function(messages){
            $scope.messages = messages;
            $scope.formIsSubmit = true;
        };
        socket.on('clientMessage', function (data) {
            $scope.messages.push(data);
            $scope.lastClientId = data.clientId;
            $scope.$apply();
        });
        $('.inputMessage').bind('keypress', function(e) {
            if(e.keyCode==13){
                var input = $('.inputMessage');
                var textMessage = input.val();
                input.val('');
                $http.post('/-/profile/messages', {
                    clientId: $scope.lastClientId, 
                    message: textMessage
                }).then(function(res){
                    console.log('res', res);                    
                });
                // $scope.$apply();
            }
        });
    }]);
})();