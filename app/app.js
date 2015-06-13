'use strict';

(function(){

	var app = angular.module('eventsApp', ['ngRoute']);

    app.config(function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'app/events/events.html',
            controller: 'EventsCtrl'
        }).when('/events/:id', {
            templateUrl: 'app/events/singleEvent.html',
            controller: 'EventsCtrl'
        }).when('/admin', {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminCtrl'
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
