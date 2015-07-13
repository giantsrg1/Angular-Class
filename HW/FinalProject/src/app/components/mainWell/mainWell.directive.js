(function() {
  'use strict';

  angular
    .module('template')
    .directive('mainWell', mainWell);

  /** @ngInject */
  function mainWell() {
    return {
      templateUrl: 'app/components/mainWell/mainWell.html',
      transclude: true
    };
  }


})();
