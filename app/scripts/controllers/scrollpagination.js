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
	$scope.pagedItems = [];
  $scope.loadMore = function(limit) {
			var length = $scope.pagedItems.length;
			var last  = (length > 0)  ? (length-1) : length;
			//var last = ($scope.pagedItems[itemOf]);
			getData(last, limit);
  };
	
   function getData(offset, limit){
		for (var i=offset; i<limit+offset; i++) {
    $scope.pagedItems.push({ id: i, name: "name "+ i, description: "description " + i });
	  }
	}
});