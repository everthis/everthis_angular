'use strict';

/* Controllers */

var everthisControllers = angular.module('everthisControllers', []);

everthisControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.posts = Phone.query();
    $scope.orderProp = 'age';
  }]);

everthisControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //   $scope.mainImageUrl = phone.images[0];
    // });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
