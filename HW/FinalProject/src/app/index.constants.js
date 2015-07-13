/* global toastr:false, moment:false */
(function() {
  'use strict';

  var pageStates = [{
  		name: 'home',
  		title: 'Main',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'  		
  	},{
  		name: 'userDash',
  		title: 'User Dashboard',
  		url: '/userDashboard',
        templateUrl: 'app/userDashboard/userDashboard.html',
        controller: 'UserController',
        controllerAs: 'user'
  	},{
  		name:'teamsDash',
  		title: 'Team Dashboard',
  		url: '/teamDashboard',
        templateUrl: 'app/teamDashboard/teamDashboard.html',
        controller: 'teamController',
        controllerAs: 'teams'
  	}
  ];

  angular
    .module('template')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('pageStates', pageStates);
})();
