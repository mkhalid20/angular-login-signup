'use strict';
/*
 * @ngdoc overview
 * @name myTestAppApp
 * @description
 * @myTestAppApp
 * @Main module of the application.
 */
var app = angular
  .module('myTestAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll',
		'ezfb'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/scrollpagination', {
        templateUrl: 'views/scrollpagination.html',
        controller: 'ScrollpaginationCtrl',
        controllerAs: 'scrollpagination'
      })
      .when('/loadmore', {
        templateUrl: 'views/loadmore.html',
        controller: 'LoadmoreCtrl',
        controllerAs: 'Loadmore'
      })
      .when('/fileupload', {
        templateUrl: 'views/fileupload.html',
        controller: 'FileuploadCtrl',
        controllerAs: 'fileupload'
      })
      .otherwise({
        redirectTo: '/'
      });	
  });
	

app.config(function (ezfbProvider) {
  /**
   * Basic setup
   *
   * https://github.com/pc035860/angular-easyfb#configuration
   */
  ezfbProvider.setInitParams({
    appId: '436245259897387'
  });  
});
	
	
/*app.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
 });

app.config(function ($httpProvider) {
			 $httpProvider.defaults.useXDomain = true;
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
 });*/




