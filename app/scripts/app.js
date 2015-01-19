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
        // when('/views/:postName', {
        //     templateUrl: function(params) {
        //         return '/views/'+ params.postName + '.html';
        //     },
        //     // controller: function(params) {
        //     //     return 'everthis' + params.category + 'Ctrl';
        //     // }
        //     controller: 'everthisLinuxCtrl'
        // }).
        when('/views/Films/:postName', {
            templateUrl: function(params) {
                return '/views/Films/filmTemplate.html';
            },
            controller: 'everthisFilmsCtrl'
        }).
        when('/views/Linux/:postName', {
            templateUrl: function(params) {
                return '/views/Linux/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/HTML&CSS/:postName', {
            templateUrl: function(params) {
                return '/views/HTML&CSS/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/WebDev/:postName', {
            templateUrl: function(params) {
                return '/views/WebDev/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/JavaScript/:postName', {
            templateUrl: function(params) {
                return '/views/JavaScript/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/Git/:postName', {
            templateUrl: function(params) {
                return '/views/Git/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/Workflow/:postName', {
            templateUrl: function(params) {
                return '/views/Workflow/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        when('/views/Others/:postName', {
            templateUrl: function(params) {
                return '/views/Others/'+ params.postName + '.html';
            },
            controller: 'everthisCommonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);


everthisApp.config(['$provide', function($provide) {
    // Use a decorator to agument the behavior of the default $browser
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
