(function() {
  'use strict';

  angular
    .module('template')
    .directive('mainCard', mainCard);

  /** @ngInject */
  function mainCard() {
    return {
      templateUrl: 'app/components/mainCard/mainCard.html',
      controller: cardController,
      controllerAs: 'cardCtrl',
      scope: {
        profile: '='
      },
      bindToController : true
    };
  }

  function cardController(){
    var self = this;


  }


})();
