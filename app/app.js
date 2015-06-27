'use strict';

(function(){

    var app = angular.module('eventsApp', ['ngRoute', 'firebase']);

	  app.config(function($routeProvider) {

      $routeProvider.when('/', {
          templateUrl: 'app/events/events.html',
          controller: 'EventsCtrl'
      }).when('/events/:id', {
          templateUrl: 'app/events/singleEvent.html',
          controller: 'EventsCtrl'
      }).when('/admin', {
          templateUrl: 'app/admin/admin.html',
          controller: 'AdminCtrl',
					data: {
			      	requireLogin: true,
							roles: ['admin']
				  }
      }).when('/login', {
          templateUrl: 'app/login/login.html',
          controller: 'LoginCtrl'
      }).when('/register', {
            templateUrl: 'app/login/register.html',
            controller: 'RegisterCtrl'
      });;
  });

	app.run(function(authService, $rootScope, $route) {

		// TODO: this is just for testing until we have a functional login form
		authService.login();

		$rootScope.$on('$routeChangeStart', function (event, next, current) {

			var requireLogin = next.data ? next.data.requireLogin : false;

			// check if the next page requires a login
			if (requireLogin) {
				console.log('access control: login required');
				if (!authService.isAuthenticated()) {
					// user is not logged in
					console.log('access control: user not authenticated, deny access');
					event.preventDefault();
					if ( next.templateUrl != "app/login/login.html" ) {
						// not going to #login, we should redirect now
	          $location.path( "/login" );
	        }
				}else {
					// user is logged in
					console.log('access control: user is logged in');
					if( next.data.roles ) {
							console.log('access control: role required');
							if( next.data.roles.indexOf($rootScope.user.role) < 0 ) {
								console.log('access control: user does not have required role');
								event.preventDefault();
							}else {
								console.log('access control: user has role, allow access');
							}
					}
				}
			}
		});

	});

	//controller as syntax
	app.controller('SampleController', function(){
		this.welcome = 'Welcome to the first AngularJS workshop.'
	});

	app.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	})

})()
