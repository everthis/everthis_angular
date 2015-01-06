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

/**
 * Filters out all duplicate items from an array by checking the specified key
 * @param [key] {string} the name of the attribute of each object to compare for uniqueness
 if the key is empty, the entire object will be compared
 if the key === false then no filtering will be performed
 * @return {array}
 */
everthisControllers.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});