'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myTestAppApp
 */

var myApp = angular.module('myTestAppApp');
myApp.controller('AboutCtrl', function($scope) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8,9];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 9; i++) {
      $scope.images.push(last + i);
    }
  };
});