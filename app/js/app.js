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
  $routeProvider.when('/berlin', {templateUrl: 'partials/city.html', controller: 'City'});
  $routeProvider.otherwise({redirectTo: '/faq'});
}]);
