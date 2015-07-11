(function () {
    'use strict';

    angular
        .module('eventsApp.authService',[])
        .factory('authService', authService);

    authService.$inject = ['$rootScope', 'FIREBASE_URL', '$firebaseAuth', 'userService'];

    function authService($rootScope, FIREBASE_URL, $firebaseAuth, userService) {

        // create an instance of the authentication service
        var auth = $firebaseAuth(new Firebase(FIREBASE_URL));

        // authenticated a user with email and password
        // returns a promise
        this.login = function (credentials) {
            var self = this;

            // login with password
            var authPromise = auth.$authWithPassword( credentials );

            authPromise.then(function (authData) {
                // make the user available to the rest of the app
                self.setUser( userService.getUser(authData.uid) );
            }).catch(function (error) {
                console.error("Authentication failed:", error);
                return false;
            });

            return authPromise;
        };

        // retrieve the client's current authentication state
        this.getAuth = function () {
            var authData = auth.$getAuth();

            if (authData) {
                console.log("getAuth: Logged in as:", authData.uid);
            } else {
                console.log("getAuth: Not logged in");
            }
            return authData;
        }

        this.isAdmin = function () {
            return this.getAuth()
                && $rootScope.user.role === 'admin';
        };

        this.getRole = function () {
            if( this.getAuth() && typeof $rootScope.user !== 'undefined' ){
                return $rootScope.user.role;
            }else {
                return null;
            }
        };

        this.setUser = function (user) {
            // console.log('setUser:' + user);
            $rootScope.user = user;
        };

        this.getUser = function () {
            return $rootScope.user;
        };

        this.logout = function () {
            console.log('authService.logout()');
            auth.$unauth();
            $rootScope.user = null;
        };

        this.onAuth = auth.$onAuth;

        return this;

    }

})();
