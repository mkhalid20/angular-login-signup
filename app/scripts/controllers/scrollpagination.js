'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:ScrollpaginationCtrl
 * @description
 * # ScrollpaginationCtrl
 * Controller of the myTestAppApp
 */
var myApp = angular.module('myTestAppApp');
myApp.controller('ScrollpaginationCtrl', function($scope) {
  $scope.resultSet = [1, 2, 3, 4, 5, 6, 7, 8,9];

  $scope.loadMore = function(limit) {
			var last = $scope.resultSet[$scope.resultSet.length - 1];
			getData(last, limit);
    
  };
	
   function getData(offset, limit){
    
		var data = [];
		for(var i = 1; i <= limit; i++) {
      $scope.resultSet.push(offset + i);
    }
	}
	
	
});