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
  $routeProvider.when('/city/:city', {templateUrl: 'partials/city.html', controller: 'CityCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'CitiesCtrl'});
  $routeProvider.when('/faq', {templateUrl: 'partials/faq.html', controller: 'CitiesCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
