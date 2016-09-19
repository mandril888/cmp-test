const angular = require('angular');
const angularRoute = require('angular-route');
const controllersModule = require('./controllersModule');
const routesModule = require('./routesModule');

angular.module('cmp-test', [angularRoute, controllersModule, routesModule]);
