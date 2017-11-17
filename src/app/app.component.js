'use strict';

import angular from 'angular';

angular.module('phoneDetailApp')
  .component('phoneDetailApp', {
    controller: phoneDetailAppController,
    controllerAs: 'phoneDetailAppVm',
    templateUrl: 'app.component.html',
  });


phoneDetailAppController.$inject = [
  '$element',
];

function phoneDetailAppController($element) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {}

  function postLink() {}

}
