function chatCtrl($scope, $rootScope, $window) {
  $rootScope.colorBg = true;

  const messages = [];
  $window.localStorage.setItem('messages', JSON.stringify(messages));

  $scope.submit = function () {
    const myMessage = $scope.myMessage;

    const retrievedData = $window.localStorage.getItem('messages');
    const localStorageMessages = JSON.parse(retrievedData);
    localStorageMessages.push(myMessage);
    $window.localStorage.setItem('messages', JSON.stringify(localStorageMessages));
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = chatCtrl;
