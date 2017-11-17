'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneCommon')
  .filter('checkmark', checkmark);

function checkmark() {

  return function (input) {
    return input ? '\u2713' : '\u2718';
  };

}
