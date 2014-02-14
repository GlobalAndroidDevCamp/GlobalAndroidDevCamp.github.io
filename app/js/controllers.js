'use strict';

/* Controllers */

angular.module('gadc.controllers', []).
  controller('CitiesCtrl', ['$scope', function($scope) {
		$scope.cities = [
			{'code':'berlin','name':'Berlin'},
			{'code':'brussels', 'name':'Brussels'}
		]
	}]).
  controller('CityCtrl', ['$scope', '$routeParams',function($scope, $routeParams){
  		$scope.city = $routeParams.city;
  	}]);