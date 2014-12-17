'use strict';

/* Services */

var everthisServices = angular.module('everthisServices', ['ngResource']);

everthisServices.factory('Post', ['$resource',
  function($resource){
    return $resource('posts/:postId.json', {}, {
      query: {method:'GET', params:{postId:'phones'}, isArray:true}
    });
  }]);
