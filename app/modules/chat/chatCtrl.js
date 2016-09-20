function chatCtrl($rootScope) {
  console.log('in the chat controller');
  $rootScope.colorBg = true;
}

chatCtrl.$inject = ['$rootScope'];
module.exports = chatCtrl;
