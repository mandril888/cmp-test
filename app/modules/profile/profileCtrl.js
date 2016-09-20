function profileCtrl($scope) {
  console.log('in the profile controller');

  $scope.greyBg = true;
  $scope.textButton = 'ADD AS FRIEND';
  $scope.toggleBg = function () {
    if ($scope.greyBg === true) {
      $scope.greyBg = false;
      $scope.textButton = 'DELETE FRIEND';
    } else {
      $scope.greyBg = true;
      $scope.textButton = 'ADD AS FRIEND';
    }
  };
}

profileCtrl.$inject = ['$scope'];
module.exports = profileCtrl;
