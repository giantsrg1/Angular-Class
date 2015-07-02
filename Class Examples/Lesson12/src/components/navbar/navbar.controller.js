'use strict';

angular.module('Lesson06')

.controller('NavbarCtrl', function (ROUTE_STATES) {
  var self = this;

  self.routes = angular.copy(ROUTE_STATES)
});
