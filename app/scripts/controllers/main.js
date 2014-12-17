'use strict';

/**
 * @ngdoc function
 * @name everthisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the everthisApp
 */
angular.module('everthisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
