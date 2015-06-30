'use strict';

angular.module('Lesson06', ['GDHome', 'GDContacts', 'GDAboutUs', 'ui.router'])
  .constant('ROUTE_STATES', {
    kHomeState: {
      stateName: 'home'
    }, 
    kAboutUsState: {
      stateName: 'aboutUs'
    },
    kAboutUsContentState: {
      stateName: 'aboutUs.content'
    },
    kContactsState: {
      stateName: 'contactUs'
    },
    kCEOState: {
      stateName: 'contactUs.ceo'
    }, 
    kPresidentState: {
      stateName: 'contactUs.pres'
    },
    kFounderState: {
      stateName: 'contactUs.founder'
    }
  })

  .config(function ($stateProvider, $urlRouterProvider, ROUTE_STATES) {
    
    $stateProvider
    .state(ROUTE_STATES.kHomeState.stateName, {
      url: '/',
      templateUrl: 'app/partials/home/home-main.html',
      controller: 'HomeCtrlMain as mainCtrl'
    })
    .state(ROUTE_STATES.kAboutUsState.stateName, {
      url: '/about-us',
      templateUrl: 'app/partials/about-us/about-us-main.html',
      controller: 'AboutUsCtrlMain as mainCtrl',
    })
    .state(ROUTE_STATES.kAboutUsContentState.stateName, {
      views: {
        sidebar: {
          templateUrl: 'app/partials/about-us/sidebar.html',
        }, 
        header: {
          templateUrl: 'app/partials/about-us/header.html',
        },
        mainContent: {
          templateUrl: 'app/partials/about-us/main-content.html',
        }
      }
    })
    .state(ROUTE_STATES.kContactsState.stateName, {
      url: '/contact',
      templateUrl: 'app/partials/contact-us/contact-main.html',
      controller: 'ContactsCtrlMain as mainCtrl'
    })
    .state(ROUTE_STATES.kCEOState.stateName, {
      templateUrl: 'app/partials/contact-us/ceo.html'
    })
    .state(ROUTE_STATES.kPresidentState.stateName, {
      templateUrl: 'app/partials/contact-us/pres.html'
    })
    .state(ROUTE_STATES.kFounderState.stateName, {
      templateUrl: 'app/partials/contact-us/founder.html'
    });

    $urlRouterProvider.otherwise('/');
  })
;
