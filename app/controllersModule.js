const profileCtrl = require('./modules/profile/profileCtrl');
const chatCtrl = require('./modules/chat/chatCtrl');

angular.module('controllersModule', [])
  .controller('profileCtrl', profileCtrl)
  .controller('chatCtrl', chatCtrl);

module.exports = 'controllersModule';
