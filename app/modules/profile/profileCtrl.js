function profileCtrl($rootScope) {
  console.log('in the profile controller');

  $rootScope.colorBg = true;
  $rootScope.textButton = 'ADD AS FRIEND';
  $rootScope.toggleBg = function () {
    if ($rootScope.colorBg === true) {
      $rootScope.colorBg = false;
      $rootScope.textButton = 'DELETE FRIEND';
    } else {
      $rootScope.colorBg = true;
      $rootScope.textButton = 'ADD AS FRIEND';
    }
  };
}

profileCtrl.$inject = ['$rootScope'];
module.exports = profileCtrl;
