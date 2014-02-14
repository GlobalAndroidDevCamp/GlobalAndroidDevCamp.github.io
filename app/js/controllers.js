'use strict';

/* Controllers */

angular.module('gadc.controllers', []).
  controller('Cities', [function($scope) {
		$scope.cities = [
			{'code':'berlin','name':'Berlin'},
			{'code':'brussels', 'name':'Brussels'}
		];
		
  }]);