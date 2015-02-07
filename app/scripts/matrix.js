(function() {
    var width = document.getElementById('q').style.width = window.innerWidth;
    document.getElementById('q').style.height = '7em';
    var height = document.getElementById('q').offsetWidth;
    var letters = Array(256).join(1).split('');
    var draw = function() {
        q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
        q.getContext('2d').fillRect(0, 0, width, height);
        letters.map(function(y_pos, index) {
            q.getContext('2d').fillStyle = '#0F0';
            text = String.fromCharCode(48 + Math.random() * 43);
            x_pos = index * 10;
            q.getContext('2d').fillText(text, x_pos, y_pos);
            letters[index] = (y_pos > 158 + Math.random() * 1e4) ? 0 : y_pos + 10;
        });
    };
    setInterval(draw, 55);
})();


everthisApp.controller('ExampleController', ['$scope', '$interval',
        function($scope, $interval) {
            // $scope.format = 'M/d/yy h:mm:ss a';
            // $scope.blood_1 = 100;
            // $scope.blood_2 = 120;

            var stop;
            $scope.fight = function() {
                // Don't start a new fight if we are already fighting
                if (angular.isDefined(stop)) return;

                stop = $interval(function() {
                    if ($scope.blood_1 > 0 && $scope.blood_2 > 0) {
                        $scope.blood_1 = $scope.blood_1 - 3;
                        $scope.blood_2 = $scope.blood_2 - 4;
                    } else {
                        $scope.stopFight();
                    }
                }, 100);
            };

            $scope.stopFight = function() {
                if (angular.isDefined(stop)) {
                    $interval.cancel(stop);
                    stop = undefined;
                }
            };

            $scope.resetFight = function() {
                $scope.blood_1 = 100;
                $scope.blood_2 = 120;
            };

            $scope.$on('$destroy', function() {
                // Make sure that the interval is destroyed too
                $scope.stopFight();
            });
        }
    ])
    // Register the 'myCurrentTime' directive factory method.
    // We inject $interval and dateFilter service since the factory method is DI.
    .directive('myCurrentTime', ['$interval', 'dateFilter',
        function($interval, dateFilter) {
            // return the directive link function. (compile function not needed)
            return function(scope, element, attrs) {
                var format, // date format
                    stopTime; // so that we can cancel the time updates

                // used to update the UI
                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                // watch the expression, and update the UI on change.
                scope.$watch(attrs.myCurrentTime, function(value) {
                    format = value;
                    updateTime();
                });

                stopTime = $interval(updateTime, 1000);

                // listen on DOM destroy (removal) event, and cancel the next UI update
                // to prevent updating time after the DOM element was removed.
                element.on('$destroy', function() {
                    $interval.cancel(stopTime);
                });
            }
        }
    ]);
