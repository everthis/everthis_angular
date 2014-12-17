'use strict';

/* Services */

var everthisServices = angular.module('everthisServices', ['ngResource']);

everthisServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('json/:postId.json', {}, {
      query: {method:'GET', params:{postId:'posts'}, isArray:true}
    });
  }]);
