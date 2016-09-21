const angular = require('angular');
const ngRoute = require('angular-route');
const controllersModule = require('./controllersModule');
const routesModule = require('./routesModule');

angular.module('cmp-test', [ngRoute, controllersModule, routesModule]);
