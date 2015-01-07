'use strict';

/* App Module */

var everthisApp = angular.module('everthisApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'phonecatAnimations',
    'everthisControllers',
    'phonecatFilters',
    'everthisServices'
]);

everthisApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/posts-list.html',
            controller: 'postsListCtrl'
        }).
        // when('/views/:postName', {
        //     templateUrl: function(params) {
        //         return '/views/' + params.postName + '.html';
        //     },
        //     controller: 'PhoneDetailCtrl'
        // }).
        when('/views/:postName', {
            templateUrl: function(params) {
                return '/views/'+ params.postName + '.html';
            },
            // controller: function(params) {
            //     return 'everthis' + params.category + 'Ctrl';
            // }
            controller: 'everthisLinuxCtrl'
        }).
        when('/views/Films/:postName', {
            templateUrl: function(params) {
                return '/views/Films/'+ params.postName + '.html';
            },
            // controller: function(params) {
            //     return 'everthis' + params.category + 'Ctrl';
            // }
            controller: 'everthisFilmsCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);


everthisApp.config(['$provide', function($provide) {
    // We use a decorator to agument the behavior of the default $browser
    // service. This is guaranteed to be called before anyone uses
    // $browser which is great.
    $provide.decorator('$browser', ['$delegate', function($delegate) {
        var superUrl = $delegate.url;
        $delegate.url = function(url, replace) {
            if (url !== undefined) {
                return superUrl(url.replace(/\%20/g, "+"), replace);
            } else {
                return superUrl().replace(/\+/g, "%20");
            }
        }
        return $delegate;
    }]);
}]);
