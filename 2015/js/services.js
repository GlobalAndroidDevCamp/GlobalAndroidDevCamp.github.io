'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('gadc.services', ['ngResource']).
  value('version', '0.1').
  factory('City', ['$resource',
  function($resource){
    return $resource('city/:city/data.json', {}, {
      query: {method:'GET', params:{city:'city'}, isArray:false}
    });
  }]).
  factory('Cities', ['$resource',
  function($resource){
    return $resource('city/all.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
  ;
