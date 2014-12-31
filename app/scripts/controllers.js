'use strict';

/* Controllers */

var everthisControllers = angular.module('everthisControllers', []);

everthisControllers.controller('postsListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.posts = Phone.query();
    $scope.orderProp = 'age';
  }]);

everthisControllers.controller('everthisLinuxCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //   $scope.mainImageUrl = phone.images[0];
    // });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

everthisControllers.controller('everthisFilm', ['$scope', '$routeParams', 'Film',
  function($scope, Film) {
    // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //   $scope.mainImageUrl = phone.images[0];
    // });
    
    $scope.film = Film.get({filmId: $routeParams.filmId}, function(film) {

    });


    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
