const angular = require('angular');
const ngRoute = require('angular-route');
// const ngStorage = require('angular-localstorage');
const controllersModule = require('./controllersModule');
const routesModule = require('./routesModule');

angular.module('cmp-test', [ngRoute, controllersModule, routesModule]);
