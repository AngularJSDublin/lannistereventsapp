'use strict';

(function(){
	var app = angular.module('eventsApp', []);

	//controller as syntax
	app.controller('SampleController', function(){
		this.welcome = 'Welcome to the first AngularJS workshop.'
	});

	app.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	})

})()