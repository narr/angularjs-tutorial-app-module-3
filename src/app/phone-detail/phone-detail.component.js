'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneDetail')
  .component('phoneDetail', {
    bindings: {
      phoneId: '@',
    },
    controller: PhoneDetailController,
    controllerAs: 'phoneDetailVm',
    templateUrl: 'phone-detail.component.html',
  });


PhoneDetailController.$inject = [
  '$element',
  'phoneDetailService',
];

function PhoneDetailController(
  $element,
  phoneDetailService
) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    vm.setImage = setImage;

    phoneDetailService.getPhoneData('json/' + vm.phoneId + '.json')
      .then(function (res) {
        vm.phone = res.data;
        setImage(vm.phone.images[0]);
      });
  }

  function postLink() {}

  function setImage(imageUrl) {
    vm.mainImageUrl = imageUrl;
  }

}
