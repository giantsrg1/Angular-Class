(function() {
  'use strict';

  angular
    .module('template')
    .config(routeConfig);


  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, pageStates) {

    for(var i = 0; i < pageStates.length; i++){
      $stateProvider.state(pageStates[i].name, {
        url: pageStates[i].url,
        templateUrl: pageStates[i].templateUrl,
        controller: pageStates[i].controller,
        controllerAs: pageStates[i].controllerAs
      });
    }

    $urlRouterProvider.otherwise('/');
  }

})();
