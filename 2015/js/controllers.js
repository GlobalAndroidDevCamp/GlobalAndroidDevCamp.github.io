'use strict';

/* Controllers */

angular.module('gadc.controllers', []).
  controller('CitiesCtrl', ['$scope', '$http', function($scope, $http) {
  	$scope.cities = [{code:'berlin', name:'Berlin'},{code:'brussels', name:'Brussels'}, {code:'duesseldorf', name:'Düsseldorf'}];
	$http.get('city/all.json').success(function(data) {
      		$scope.cities = data;
    		});
  	}]
	).
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
  	   
  	
  	$scope.availableLanguages = [
  		{key:"en", name:"English"},
  		{key:"de", name:"Deutsch"},
  	];
  	
  }]);
