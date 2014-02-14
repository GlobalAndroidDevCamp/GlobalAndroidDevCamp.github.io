'use strict';

/* Filters */

angular.module('gadc.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('i18n', ['localizedTexts', function (localizedTexts) {
    return function (text) {
        if (localizedTexts.hasOwnProperty(text)) {
            return localizedTexts[text];
        }
     };
  }]);
    
