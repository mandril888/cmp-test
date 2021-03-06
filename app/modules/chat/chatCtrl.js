const randomText = require('./chatHandlers/randomText');
const $ = require('jquery');

function chatCtrl($scope, $rootScope, $window) {
  $rootScope.colorBg = true;

  // check if the girl has written something to create or no the random message
  if (!$window.sessionStorage.randomMessage) {
    const inicialRandomMessage = randomText();
    $scope.randomText = $window.sessionStorage.randomMessage = inicialRandomMessage;
    $('.message-girl').addClass('animate-once');
  } else {
    $scope.randomText = $window.sessionStorage.randomMessage;
    $('.message-girl').removeClass('animate-once');
  }

  // check if I have written something in the chat to generate the messages in the page
  if (!$window.sessionStorage.messages) {
    const messages = [];
    $window.sessionStorage.setItem('messages', JSON.stringify(messages));
  } else {
    const retrievedData = $window.sessionStorage.getItem('messages');
    const sessionStorageMessages = JSON.parse(retrievedData);
    $scope.allMessages = sessionStorageMessages;
    $('html, body').animate({ scrollTop: $(document).height() }, 1000);
  }

  //function to storage my written messages
  $scope.submit = function () {
    const myMessage = { message: $scope.myMessage };
    $scope.myMessage = null;

    const retrievedData = $window.sessionStorage.getItem('messages');
    const sessionStorageMessages = JSON.parse(retrievedData);
    sessionStorageMessages.push(myMessage);
    $window.sessionStorage.setItem('messages', JSON.stringify(sessionStorageMessages));
    $scope.allMessages = sessionStorageMessages;

    $('html, body').animate({ scrollTop: $('.enter-animation').offset().top }, 1000);
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = chatCtrl;
