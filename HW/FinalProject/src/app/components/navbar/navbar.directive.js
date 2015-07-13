(function() {
  'use strict';

  angular
    .module('template')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'navCtrl'
    };
  }

  function navbarController(pageStates){
    var self = this;

    self.pageStates = pageStates;
  }

})();
