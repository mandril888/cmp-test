function chatCtrl($scope, $rootScope, $localStorage) {
  $rootScope.colorBg = true;
  $scope.submit = function () {
    const myMessage = $scope.myMessage;
    console.log(myMessage);
    $scope.storage = $localStorage;
    $scope.storage.message = [];
    $scope.storage.message.push(myMessage);
  };
}

chatCtrl.$inject = ['$scope', '$rootScope', '$localStorage'];
module.exports = chatCtrl;
