function profileCtrl($scope, $rootScope, $window) {
  if (!$window.sessionStorage.sophieFriend) {
    $rootScope.colorBg = true;
  } else {
    $rootScope.colorBg = false;
  }

  $rootScope.textButton = 'ADD AS FRIEND';
  $rootScope.toggleBg = function () {
    if ($rootScope.colorBg === true) {
      $window.sessionStorage.sophieFriend = true;
      $rootScope.colorBg = false;
      $rootScope.textButton = 'DELETE FRIEND';
    } else {
      $rootScope.colorBg = true;
      $rootScope.textButton = 'ADD AS FRIEND';
    }
  };

  $scope.closeApp = function () {
    $window.close();
  };
}

profileCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = profileCtrl;
