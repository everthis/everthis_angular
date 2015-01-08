'use strict';

/* Controllers */

var everthisControllers = angular.module('everthisControllers', []);

everthisControllers.controller('postsListCtrl', ['$scope', 'Posts',
    function($scope, Posts) {
        $scope.posts = Posts.query();
        $scope.orderProp = 'age';

        $scope.postsIncludes = [];
        $scope.includePost = function(post) {
            var i = $.inArray(post, $scope.postsIncludes);
            if (i > -1) {
                $scope.postsIncludes.splice(i, 1);
            } else {
                $scope.postsIncludes.push(post);
            };
        }

        $scope.PostFilter = function(posts) {
            if ($scope.postsIncludes.length > 0) {
                if ($.inArray(posts.category, $scope.postsIncludes) < 0)
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
