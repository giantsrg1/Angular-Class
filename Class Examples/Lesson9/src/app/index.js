'use strict';

angular.module('Lesson9', ['ngAnimate', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'PeopleController as people'
      });

    $urlRouterProvider.otherwise('/');
  })
;
