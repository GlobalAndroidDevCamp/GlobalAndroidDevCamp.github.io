'use strict';

/* Controllers */

angular.module('gadc.controllers', []).
  controller('CitiesCtrl', ['$scope', '$http', function($scope) {
  	$scope.cities = [{code:'berlin', name:'Berlin'},{code:'brussels', name:'Brussels'}];
	}]).
  controller('CityCtrl', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http){
  		$scope.city = $routeParams.city;
  		$http.get('city/' + $routeParams.city + '/data.json').success(function(data) {
      $scope.cityData = data;
    });
  	}]).
  controller('Ctrl', ['$scope','$translate',
  function($scope, $translate){
  	$scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  	};
  }]);