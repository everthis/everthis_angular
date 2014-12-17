'use strict';

/* App Module */

var everthisApp = angular.module('everthisApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'phonecatAnimations',
  'everthisControllers',
  'phonecatFilters',
  'everthisServices'
]);

everthisApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/posts-list.html',
        controller: 'PhoneListCtrl'
      }).
      // when('/#/views/:user_id', {
      //   templateUrl: function($routeParams){ console.log('/#/views/' + $routeParams.user_id + '.html');return '/#/views/' + $routeParams.user_id + '.html'; },
      //   controller: 'PhoneDetailCtrl'
      // }).

      when('/views/Bash scripts', {
        templateUrl: 'views/bash.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/views/Get Parameters from your Script Tag', {
        templateUrl: 'views/script.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/views/Tutorial Git', {
        templateUrl: 'views/Git guide.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
