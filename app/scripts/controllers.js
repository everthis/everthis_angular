'use strict';

/* Controllers */

var everthisControllers = angular.module('everthisControllers', []);


// (function(app) {

//   var routeLoadingIndicator = function($rootScope) {
//     return {
//       restrict: 'E',
//       template: "<h1 ng-if='isRouteLoading'>Loading...</h1>",
//       link: function(scope, elem, attrs) {
//         scope.isRouteLoading = false;

//         $rootScope.$on('$routeChangeStart', function() {
//           scope.isRouteLoading = true;
//         });

//         $rootScope.$on('$routeChangeSuccess', function() {
//           scope.isRouteLoading = false;
//         });
//       }
//     };
//   };
//   routeLoadingIndicator.$inject = ['$rootScope'];

//   app.directive('routeLoadingIndicator', routeLoadingIndicator);

// }(angular.module('everthisControllers')));


everthisControllers.controller('postsListCtrl', ['$scope', 'Posts', '$location',
    function($scope, Posts, $location) {
        $scope.posts = Posts.query();
        $scope.sortField = 'date';

        $scope.postsIncludes = [];

        $scope.tagChecked = false;
        $scope.postReverse = null;
        $scope.dateReverse = true;
        $scope.reverse = true;
        var arr = [];

        $scope.includePost = function(post) {

            var i = ($scope.postsIncludes == null ? -1 : arr.indexOf.call( $scope.postsIncludes, post));

            // var i = $.inArray(post, $scope.postsIncludes);
            if (i > -1) {
                $scope.postsIncludes.splice(i, 1);
            } else {
                $scope.postsIncludes.push(post);
            };
            this.tagChecked = !(this.tagChecked);
        }


        $scope.sortPostName = function(s) {
                s.postReverse = !s.postReverse;
                $scope.sortField = 'postName';
                $scope.reverse = s.postReverse;
                $scope.dateReverse = null;
        }

        $scope.sortPostDate = function(s) {
                s.dateReverse = !s.dateReverse;
                $scope.sortField = 'date';
                $scope.reverse = s.dateReverse;
                $scope.postReverse = null;
        }

        $scope.PostFilter = function(posts) {
            if ($scope.postsIncludes.length > 0) {
                if (arr.indexOf.call( $scope.postsIncludes, posts.category) < 0)

                // if ($.inArray(posts.category, $scope.postsIncludes) < 0)
                    return;
            }
            return posts;
        }

    }
]);

everthisControllers.controller('everthisLinuxCtrl', ['$scope', '$routeParams', 'Posts',
    function($scope, $routeParams, Posts) {
        // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        //   $scope.mainImageUrl = phone.images[0];
        // });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
]);

everthisControllers.controller('everthisFilmsCtrl', ['$scope', '$routeParams', 'Film',
    function($scope, $routeParams, Film) {
        $scope.film = Film.get({
            postName: $routeParams.postName
        }, function(film) {});
    }
]);

everthisControllers.controller('everthisCommonCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {}
]);
