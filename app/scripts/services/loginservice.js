'use strict';

/**
 * @ngdoc service
 * @name myTestAppApp.loginService
 * @description
 * # loginService
 * Service in the myTestAppApp.
 */
angular.module('myTestAppApp').service('loginService', function ($http, $q, $log,$cookies) {
	    return {
				fetch : function (postData){			
				var method = 'POST';
				var url = "http://kidlr.lotiv.com/api/user/login";
				var result = {};
				var deferred = $q.defer();
			console.log(postData);
$http({method: method, data: postData, url: url, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
					then(function(data) {
				//deferred.resolve(data);
				$cookies.put('userData', data);	
						
					}, function(error) {
						$log.error(error);
						deferred.reject(error);
				});
				console.log($cookies.get('userData'));
				return deferred.promise;
			}
    }
});
