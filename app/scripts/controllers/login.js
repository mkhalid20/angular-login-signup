'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myTestAppApp
 */
var app = angular.module('myTestAppApp');

app.controller('LoginCtrl', function ($scope,loginService,$http,$cookies) {
		// Setting a cookie
    $scope.Login = function(login) {
			console.log($scope.login);
		  var promise = loginService.fetch($scope.login);
			promise.then(
						function (response){
							console.log(response.data);
						},
						function (failure){
							console.log(failure.data);
					}
				)
   };
});