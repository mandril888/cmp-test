function profileCtrl($scope, $rootScope, $window) {
  // check if the girl is or not a friend
  if (!$window.sessionStorage.sophieFriend || $window.sessionStorage.sophieFriend === 'false') {
    $rootScope.colorBg = true;
    $rootScope.textButton = 'ADD AS FRIEND';
  } else {
    $rootScope.colorBg = false;
    $rootScope.textButton = 'DELETE FRIEND';
  }

  // function to change the bg page and button colors depending if she is or not a friend
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
