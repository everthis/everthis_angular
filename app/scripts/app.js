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
      when('/views/:postName', {
        templateUrl: function($routeParams){ return '/views/' + $routeParams.postName + '.html'; },
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
