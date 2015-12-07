'use strict';
/**
 * @ngdoc function
 * @name myTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myTestAppApp
 */

var myApp = angular.module('myTestAppApp');
myApp.controller('LoadmoreCtrl', function($scope) {

	 $scope.showData = function () {

   $scope.datalists = [{
      "name": "Aqeel Ahmed",
      "age": "51"
    },{
      "name": "Shahbaz",
      "age": "52"
    },{
      "name": "Rashid",
      "age": "53"
    },{
      "name": "Khalid",
      "age": "54"
    },{
      "name": "Aamir",
      "age": "55"
    },{
      "name": "Shakir",
      "age": "56"
    },{
      "name": "Faisal",
      "age": "57"
    },{
      "name": "Fahad",
      "age": "58"
    },{
      "name": "Kashif",
      "age": "59"
    },{
      "name": "Irfan",
      "age": "60"
    },{
      "name": "Ahsan",
      "age": "61"
    },{
      "name": "Junaid",
      "age": "62"
    },{
      "name": "Aleem",
      "age": "63"
    }]
    //show more functionality
/*var pagesShown = 1;
  var pageSize = 3;
*/
    var Offset = 1;
    var Limit = 2;

    $scope.paginationLimit = function (data) {
			return Limit * Offset;
    };
    $scope.hasMoreItemsToShow = function () {
      return Offset < ($scope.datalists.length / Limit);
    };
    $scope.showMoreItems = function () {
      Offset = Offset + 1;
    };
  }
});