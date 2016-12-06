'use strict';

/**
 * @ngdoc overview
 * @name codeAndComedyApp
 * @description
 * # codeAndComedyApp
 *
 * Main module of the application.
 */
angular
  .module('codeAndComedyApp', [
    'ngAnimate',
    'ui.router',
    'vtortola.ng-terminal',
    'underscore'
  ]).config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    var mainState = {
      name: 'main',
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    };

    var registerState = {
      name: 'register',
      url: '/register?registered&error',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    };

    var contactState = {
      name: 'contact',
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    };

    var locationState = {
      name: 'location',
      url: '/location',
      templateUrl: 'views/location.html',
      controller: 'LocationCtrl'
    };

    var newsState = {
      name: 'news',
      url: '/news',
      templateUrl: 'views/news.html',
      controller: 'NewsCtrl'
    };

    var programState = {
      name: 'program',
      url: '/program',
      templateUrl: 'views/program.html',
      controller: 'ProgramCtrl'
    };

    var speakersState = {
      name: 'speakers',
      url: '/speakers',
      templateUrl: 'views/speakers.html',
      controller: 'SpeakersCtrl'
    };

    var cnc2015State = {
      name: 'Code & Comedy 2015',
      url: '/code-and-comedy-2015',
      templateUrl: 'views/cnc2015.html',
      controller: 'Cnc2015Ctrl'
    };

    $stateProvider.state(mainState);
    $stateProvider.state(registerState);
    $stateProvider.state(speakersState);
    $stateProvider.state(newsState);
    $stateProvider.state(programState);
    $stateProvider.state(locationState);
    $stateProvider.state(contactState);
    $stateProvider.state(cnc2015State);

    //$locationProvider.html5Mode(true).hashPrefix('!');
  });
