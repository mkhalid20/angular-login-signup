'use strict';
/**
 * @ngdoc function
 * @name myTestAppApp.controller:LoadmoreCtrl
 * @description
 * # LoadmoreCtrl
 * Controller of the myTestAppApp
 */

var app = angular.module('myTestAppApp');
app.factory("Item", function() {
  var items = [];
  var paginate = function getData(offset, limit){ 
		for (var i=offset; i<limit+offset;i++) {
    	items.push({ id: i, name: "name "+ i, description: "description " + i });
  	}
	}
	return {
    get: function(offset, limit) {
      return items.slice(offset, offset+limit);
    },
    total: function() {
      return items.length;
    	}
  	};
	});

app.controller("LoadmoreCtrl", function($scope, Item) {

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.total = Item.total();
  $scope.pagedItems = Item.get($scope.currentPage * $scope.itemsPerPage,$scope.itemsPerPage);

  $scope.loadMore = function(limit) {
	$scope.itemsPerPage	=(limit != '') ? limit : $scope.itemsPerPage;
    $scope.currentPage++;
    var newItems = Item.get($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.itemsPerPage);
  };
});