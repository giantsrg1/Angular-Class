(function() {
  'use strict';

  angular
    .module('template')
    .factory('server', server);

  /** @ngInject */
  function server($resource) {
    return $resource("/:link", {link: "link"}, {
    	get: { 
    		method: "GET",
    		isArray: false
    	},
      getArray: { 
        method: "GET",
        isArray: true
      }
    });
  }
})();
