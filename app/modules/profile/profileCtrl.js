function profileCtrl($scope, $rootScope, $window) {
  if (!$window.sessionStorage.sophieFriend || $window.sessionStorage.sophieFriend === 'false') {
    console.log('enter');
    $rootScope.colorBg = true;
    $rootScope.textButton = 'ADD AS FRIEND';
  } else {
    $rootScope.colorBg = false;
    $rootScope.textButton = 'DELETE FRIEND';
  }

  $rootScope.toggleBg = function () {
    if ($rootScope.colorBg === true) {
      $window.sessionStorage.sophieFriend = true;
      $rootScope.colorBg = false;
      $rootScope.textButton = 'DELETE FRIEND';
    } else {
      $window.sessionStorage.sophieFriend = false;
      $rootScope.colorBg = true;
      $rootScope.textButton = 'ADD AS FRIEND';
    }
  };
}

profileCtrl.$inject = ['$scope', '$rootScope', '$window'];
module.exports = profileCtrl;
