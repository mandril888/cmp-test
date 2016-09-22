const randomText = require('./chatHandlers/randomText');

function chatCtrl($scope, $rootScope, $window) {
  $rootScope.colorBg = true;

  if (!$window.sessionStorage.randomMessage) {
    const inicialRandomMessage = randomText();
    $window.sessionStorage.randomMessage = inicialRandomMessage;
    $scope.randomText = $window.sessionStorage.randomMessage;
  } else {
    $scope.randomText = $window.sessionStorage.randomMessage;
  }

  if (!$window.sessionStorage.messages) {
    const messages = [];
    $window.sessionStorage.setItem('messages', JSON.stringify(messages));
  }

  $scope.submit = function () {
    const myMessage = $scope.myMessage;
    $scope.myMessage = null;

    const retrievedData = $window.sessionStorage.getItem('messages');
    const sessionStorageMessages = JSON.parse(retrievedData);
    sessionStorageMessages.push(myMessage);
    $window.sessionStorage.setItem('messages', JSON.stringify(sessionStorageMessages));

    $scope.allMessages = sessionStorageMessages;
    console.log($scope.allMessages);
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = chatCtrl;
