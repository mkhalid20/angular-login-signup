'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the myTestAppApp
 */
var app = angular.module('myTestAppApp');

app.controller('SignupCtrl', function (/*$scope, $http, signupService, $cookies*/ $scope, ezfb, $window, $location, $q) {
	

	
    /*var results = [];
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
      };*/
			
			updateMe();
  
  updateLoginStatus()
  .then(updateApiCall);

  /**
   * Subscribe to 'auth.statusChange' event to response to login/logout
   */
  ezfb.Event.subscribe('auth.statusChange', function (statusRes) {
    $scope.loginStatus = statusRes;

    updateMe();
    updateApiCall();
  });

  $scope.login = function () {
    /**
     * Calling FB.login with required permissions specified
     * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
     */
    ezfb.login(null, {scope: 'email,user_likes'});

    /**
     * In the case you need to use the callback
     *
     * ezfb.login(function (res) {
     *   // Executes 1
     * }, {scope: 'email,user_likes'})
     * .then(function (res) {
     *   // Executes 2
     * })
     *
     * Note that the `res` result is shared.
     * Changing the `res` in 1 will also change the one in 2
     */
  };

  $scope.logout = function () {
    /**
     * Calling FB.logout
     * https://developers.facebook.com/docs/reference/javascript/FB.logout
     */
    ezfb.logout();

    /**
     * In the case you need to use the callback
     *
     * ezfb.logout(function (res) {
     *   // Executes 1
     * })
     * .then(function (res) {
     *   // Executes 2
     * })
     */
  };

  $scope.share = function () {
    var no = 1,
        callback = function (res) {
          console.log('FB.ui callback execution', no++);
          console.log('response:', res);
        };

    ezfb.ui(
      {
        method: 'feed',
        name: 'angular-easyfb API demo',
        picture: 'http://plnkr.co/img/plunker.png',
        link: 'http://plnkr.co/edit/qclqht?p=preview',
        description: 'angular-easyfb is an AngularJS module wrapping Facebook SDK.' + 
                     ' Facebook integration in AngularJS made easy!' + 
                     ' Please try it and feel free to give feedbacks.'
      },
      callback
    )
    .then(callback);
  };

  /**
   * For generating better looking JSON results
   */
  var autoToJSON = ['loginStatus', 'apiRes']; 
  angular.forEach(autoToJSON, function (varName) {
    $scope.$watch(varName, function (val) {
      $scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
    }, true);
  });
  
  /**
   * Update api('/me') result
   */
  function updateMe () {
    ezfb.getLoginStatus()
    .then(function (res) {
      // res: FB.getLoginStatus response
      // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
      return ezfb.api('/me');
    })
    .then(function (me) {
      // me: FB.api('/me') response
      // https://developers.facebook.com/docs/javascript/reference/FB.api
      $scope.me = me;
    });
  }
  
  /**
   * Update loginStatus result
   */
  function updateLoginStatus () {
    return ezfb.getLoginStatus()
      .then(function (res) {
        // res: FB.getLoginStatus response
        // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
        $scope.loginStatus = res;
      });
  }

  /**
   * Update demostration api calls result
   */
  function updateApiCall () {
    return $q.all([
        ezfb.api('/me'),
        ezfb.api('/me/likes')
      ])
      .then(function (resList) {
        // Runs after both api calls are done
        // resList[0]: FB.api('/me') response
        // resList[1]: FB.api('/me/likes') response
        $scope.apiRes = resList;
      });

  }
			
			
			
			
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