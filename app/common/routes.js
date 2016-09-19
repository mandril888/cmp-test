function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/modules/profile/profile.html',
      controller: 'profileCtrl',
    })
    .when('/profile', {
      templateUrl: 'app/modules/profile/profile.html',
      controller: 'profileCtrl',
    })
    .when('/chat', {
      templateUrl: 'app/modules/chat/chat.html',
      controller: 'chatCtrl',
    })
    .otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];
module.exports = config;
