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

            var i = ($scope.postsIncludes == null ? -1 : arr.indexOf.call($scope.postsIncludes, post));

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
                if (arr.indexOf.call($scope.postsIncludes, posts.category) < 0)

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

everthisControllers.controller('everthisWebDevCtrl', ['$scope', '$routeParams', 'WebDev',
    function($scope, $routeParams, WebDev) {
        $scope.film = WebDev.get({
            postName: $routeParams.postName
        }, function(film) {});
    }
]);

everthisControllers.controller('everthisCommonCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {}
]);


everthisControllers.controller('ExampleController', ['$scope', '$interval',
    function($scope, $interval) {
        // $scope.format = 'M/d/yy h:mm:ss a';
        // $scope.blood_1 = 100;
        // $scope.blood_2 = 120;

        var stop;

        $scope.fight = function() {
            // Don't start a new fight if we are already fighting
            if (angular.isDefined(stop)) return;
            var matrix_rain = document.getElementById('matrix_rain');
            var matrix_rain_container = document.getElementById("matrix_rain_container");
            var letters = Array(256).join('1').split('');
            var text, x_pos, width, height;
            matrix_rain.style.height = matrix_rain_container.offsetHeight + 'px';
            matrix_rain.style.width = matrix_rain_container.offsetWidth + 'px';
            width = matrix_rain.width = matrix_rain_container.offsetWidth;
            height = matrix_rain.height = matrix_rain_container.offsetHeight;
            var draw = function() {
                matrix_rain.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
                matrix_rain.getContext('2d').fillRect(0, 0, width, height);
                letters.map(function(y_pos, index) {
                    matrix_rain.getContext('2d').fillStyle = '#0F0';
                    text = String.fromCharCode(48 + Math.random() * 43);
                    x_pos = index * 10;
                    matrix_rain.getContext('2d').fillText(text, x_pos, y_pos);
                    letters[index] = (y_pos > height + Math.random() * 1e4) ? 0 : y_pos + 10;
                });
            };

            stop = $interval(draw, 55);
        };


        $scope.fight();

        //

        $scope.stopFight = function() {
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        };

        // $scope.resetFight = function() {
        //     $scope.blood_1 = 100;
        //     $scope.blood_2 = 120;
        // };

        $scope.$on('$destroy', function() {
            // Make sure that the interval is destroyed too
            $scope.stopFight();
        });
    }
]);
// Register the 'myCurrentTime' directive factory method.
// We inject $interval and dateFilter service since the factory method is DI.
// .directive('myCurrentTime', ['$interval', 'dateFilter',
//     function($interval, dateFilter) {
//         // return the directive link function. (compile function not needed)
//         return function(scope, element, attrs) {
//             var format, // date format
//                 stopTime; // so that we can cancel the time updates

//             // used to update the UI
//             function updateTime() {
//                 element.text(dateFilter(new Date(), format));
//             }

//             // watch the expression, and update the UI on change.
//             scope.$watch(attrs.myCurrentTime, function(value) {
//                 format = value;
//                 updateTime();
//             });

//             stopTime = $interval(updateTime, 1000);

//             // listen on DOM destroy (removal) event, and cancel the next UI update
//             // to prevent updating time after the DOM element was removed.
//             element.on('$destroy', function() {
//                 $interval.cancel(stopTime);
//             });
//         }
//     }
// ]);

everthisControllers.controller('gamesController', ['$scope',

       function($scope){

            if (!Array.prototype.shuffle) {
                Array.prototype.shuffle = function() {
                    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
                    return this;
                };
            }

            $scope.currentdata = [0,1,2,3,4,5,6,7,8];


            $scope.init = function(){
                $scope.currentdata.shuffle();
                $scope.data = $scope.currentdata;
                $scope.time = 0;
                $scope.timer = null;
            }

            $scope.runTimmer = function(){
                $scope.timer = setInterval(function(){
                    $scope.time += 1;
                }, 1000);
            }

            $scope.doclick = function(c,i){

                if( $scope.timer == null ){
                    $scope.runTimmer();
                }

                var greyclass = $scope.currentdata.indexOf(8) ;
                var leng = Math.abs( i - greyclass );
                if( ( leng == 1 && parseInt(i/3) == parseInt(greyclass/3) ) || leng == 3 ){
                    var res = $scope.doexchange($scope.currentdata,greyclass,i);
                    $scope.data = res;
                    $scope.checkSuccess(res);
                }
            }

            $scope.doexchange = function(data,index1,index2){
                var tmp = data[index1];
                data[index1] = data[index2];
                data[index2] = tmp;
                return data;
            }

            $scope.checkSuccess = function(data){
                if( data[0] == 0 &&
                    data[1] == 1 &&
                    data[2] == 2 &&
                    data[3] == 3 &&
                    data[4] == 4 &&
                    data[5] == 5 &&
                    data[6] == 6 &&
                    data[7] == 7
                ){
                    clearInterval($scope.timer);
                    alert('You have used '+ $scope.time +'seconds to complete the puzzle.');
                    // $scope.init();
                }
            }
        }

    ])
