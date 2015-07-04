'use strict';

(function(){

    var app = angular.module('eventsApp', ['ngRoute', 'firebase', 'angular-date-picker-polyfill']);

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
            },
        }).when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'app/login/register.html',
            controller: 'RegisterCtrl'
        }).when('/logout', {
            resolve: {
                data: ['authService', function(authService) {
                    authService.logout();
                }]
            }
        }).when('/event/create', {
            templateUrl: 'app/events/createEvent.html',
            controller: 'CreateEventCtrl'
        }).when('/event/edit', {
            templateUrl: 'app/events/editEvent.html',
            controller: 'EventsCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });

    app.run(function(authService, $rootScope, $route, $location) {

        // if the user is already authenticated
        // set the user on the scope
        if(authService.getAuth()) {
            authService.setUser( authService.getAuth() );
        }

        // setup a callback for when the authentication state changes
        authService.onAuth(function(authData) {
          if (authData) {
            console.log("Logged in as:", authData.uid);
            // TODO: Ideally on successful login we should redirect
            // the user back to where they were originally trying to get to
            var redirectTo = $location.search().redirectTo;
            // console.log('redirecting to: ' + redirectTo);
            $location.url( redirectTo );
          } else {
            console.log("Logged out");
            $location.path( "/" );
          }
        });

        // Access Control
        // Check if the route being navigated to requires a login/role
        $rootScope.$on('$routeChangeStart', function (event, next, current) {

            var requireLogin = next && next.data ? next.data.requireLogin : false;

            // check if the next page requires a login
            if (requireLogin) {
                console.log('access control: login required');
                if (!authService.getAuth()) {
                    // user is not logged in
                    console.log('access control: user not authenticated, deny access');
                    event.preventDefault();
                    if ( next.templateUrl != "app/login/login.html" ) {
                        // not going to #login, we should redirect now
                        $location.url( "/login?redirectTo=" + next.originalPath );
                    }
                }else {
                    // user is logged in
                    console.log('access control: user is logged in');
                    if( typeof next.data != 'undefined' && typeof next.data.roles != 'undefined' ) {
                        console.log('access control: role required');
                        if( next.data.roles.indexOf(authService.getRole()) < 0 ) {
                            //if(authService.isAdmin())
                            console.log('access control: user does not have required role');
                            event.preventDefault();
                            console.log('redirecting');
                            $location.path( "/not-authorised" );
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
    });

})()
