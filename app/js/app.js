'use strict';


// Declare app level module which depends on filters, and services
angular.module('gadc', [
  'ngRoute',
  'gadc.filters',
  'gadc.services',
  'gadc.directives',
  'gadc.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/berlin', {templateUrl: 'partials/city.html', controller: 'Cities'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Cities'});
  $routeProvider.when('/faq', {templateUrl: 'partials/faq.html', controller: 'Cities'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
