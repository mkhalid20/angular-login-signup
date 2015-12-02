'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the myTestAppApp
 */
var app = angular.module('myTestAppApp');

app.controller('SignupCtrl', function ($scope, $http, signupService, $cookies) {
    var results = [];
    if($scope.search === undefined){
        $scope.search = "Sherlock Holmes";
    }
		
		// Setting a cookie
    $scope.signUp = function(signup) {
			console.log($scope.signup);
				var promise = signupService.fetch($scope.signup);
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
	
/*app.factory('signupService', function($http, $q, $log,$cookies) {			

			return {
				fetch : function (postData){			
				var method = 'POST';
				var url = "http://kidlr.lotiv.com/api/user/register";
				var result = {};
				var deferred = $q.defer();
			console.log(postData);
$http({method: method, data: postData, url: url, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
					then(function(data) {
						deferred.resolve(data);
						$cookies.put('userData', data);	
						
					}, function(error) {
						$log.error(error);
						deferred.reject(error);
				});
				console.log($cookies.get('userData'));
				return deferred.promise;
			}
    }
});*/