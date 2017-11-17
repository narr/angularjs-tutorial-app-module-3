'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneDetail')
  .factory('phoneDetailService', phoneDetailService);


phoneDetailService.$inject = [
  '$http',
];

function phoneDetailService($http) {

  return {
    getPhoneData: getPhoneData,
  }

  function getPhoneData(url) {
    return $http.get(url);
  }

}
