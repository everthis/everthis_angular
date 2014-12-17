'use strict';

/**
 * @ngdoc function
 * @name everthisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the everthisApp
 */
angular.module('everthisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
