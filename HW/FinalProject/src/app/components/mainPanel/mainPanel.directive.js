(function() {
  'use strict';

  angular
    .module('template')
    .directive('mainPanel', mainPanel);

  /** @ngInject */
  function mainPanel() {
    return {
      templateUrl: 'app/components/mainPanel/mainPanel.html',
      controller: panelController,
      controllerAs: 'panelCtrl',
      scope: {
        title: '='
      },
      bindToController : true,
      transclude: true
    };
  }

  function panelController(){
    var self = this;
  }


})();
