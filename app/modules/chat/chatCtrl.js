const randomText = require('./../../functions/randomText');

function chatCtrl($scope, $rootScope, $window) {
  $rootScope.colorBg = true;

  $scope.randomText = randomText();
  console.log('random text: ' + $scope.randomText);

  if (!$window.localStorage.messages) {
    const messages = [];
    $window.localStorage.setItem('messages', JSON.stringify(messages));
  }

  $scope.submit = function () {
    const myMessage = $scope.myMessage;
    $scope.myMessage = null;

    const retrievedData = $window.localStorage.getItem('messages');
    const localStorageMessages = JSON.parse(retrievedData);
    localStorageMessages.push(myMessage);
    $window.localStorage.setItem('messages', JSON.stringify(localStorageMessages));

    $scope.allMessages = localStorageMessages;
    console.log($scope.allMessages);
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = chatCtrl;
