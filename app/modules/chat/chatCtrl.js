const randomText = require('./chatHandlers/randomText');
const $ = require('jquery');

function chatCtrl($scope, $rootScope, $window) {
  $rootScope.colorBg = true;

  if (!$window.sessionStorage.randomMessage) {
    const inicialRandomMessage = randomText();
    $scope.randomText = $window.sessionStorage.randomMessage = inicialRandomMessage;
  } else {
    $scope.randomText = $window.sessionStorage.randomMessage;
  }

  if (!$window.sessionStorage.messages) {
    const messages = [];
    $window.sessionStorage.setItem('messages', JSON.stringify(messages));
  } else {
    const retrievedData = $window.sessionStorage.getItem('messages');
    const sessionStorageMessages = JSON.parse(retrievedData);
    $scope.allMessages = sessionStorageMessages;
  }

  $scope.submit = function () {
    const myMessage = { message: $scope.myMessage };
    $scope.myMessage = null;

    const retrievedData = $window.sessionStorage.getItem('messages');
    const sessionStorageMessages = JSON.parse(retrievedData);
    sessionStorageMessages.push(myMessage);
    $window.sessionStorage.setItem('messages', JSON.stringify(sessionStorageMessages));

    $scope.allMessages = sessionStorageMessages;
    console.log($scope.allMessages);

    $('html, body').animate({
      scrollTop: $('.enter-animation').offset().top }, 1000);
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = chatCtrl;
