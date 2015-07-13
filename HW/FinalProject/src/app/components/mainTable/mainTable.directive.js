(function() {
  'use strict';

  angular
    .module('template')
    .directive('mainTable', mainTable);

  /** @ngInject */
  function mainTable() {
    return {
      templateUrl: 'app/components/mainTable/mainTable.html',
      controller: tableController,
      controllerAs: 'tableCtrl',
      scope: {
        headers: '=',
        values : '=',
        onClickRow : '&'
      },
      bindToController : true
    };
  }

  function tableController(){
    var self = this;

    self.clickRow = function(rowValue){
      self.onClickRow({value: rowValue})
    }

    
  }

})();
