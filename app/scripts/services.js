'use strict';

/* Services */

var everthisServices = angular.module('everthisServices', ['ngResource']);

everthisServices.factory('Posts', ['$resource',
  function($resource){
    return $resource('json/:postId.json', {}, {
      query: {method:'GET', params:{postId:'posts'}, isArray:true}
    });
  }]);

everthisServices.factory('Film', ['$resource',
  function($resource){
    return $resource('json/Films/:postName.json', {}, {
      query: {method:'GET', params:{postName:'posts'}, isArray:true}
    });
  }]);
everthisServices.factory('WebDev', ['$resource',
  function($resource){
    return $resource('json/WebDev/:postName.json', {}, {
      query: {method:'GET', params:{postName:'posts'}, isArray:true}
    });
  }]);
