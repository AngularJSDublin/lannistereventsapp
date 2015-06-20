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
            controller: 'AdminCtrl'
        }).when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'app/login/register.html'
        });
    });

})()
