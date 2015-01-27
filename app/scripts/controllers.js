'use strict';

/* Controllers */

var everthisControllers = angular.module('everthisControllers', []);

everthisControllers.controller('postsListCtrl', ['$scope', 'Posts', '$location',
    function($scope, Posts, $location) {
        $scope.posts = Posts.query();
        $scope.sortField = 'date';

        $scope.postsIncludes = [];

        $scope.tagChecked = false;
        $scope.postReverse = null;
        $scope.dateReverse = true;
        $scope.reverse = true;

        $scope.includePost = function(post) {
            var i = $.inArray(post, $scope.postsIncludes);
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
                if ($.inArray(posts.category, $scope.postsIncludes) < 0)
                    return;
            }
            return posts;
        }

        // $scope.showPageHero = $location.path() === '/';
        //
        $scope.isViewLoading = false;
        $scope.$on('$routeChangeStart', function() {
          $scope.isViewLoading = true;
        });
        $scope.$on('$routeChangeSuccess', function() {
          $scope.isViewLoading = false;
        });
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
