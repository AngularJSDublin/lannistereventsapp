(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('authService', authService);

    authService.$inject = ['$rootScope', 'database', '$firebaseAuth'];

    function authService($rootScope, database, $firebaseAuth) {

        // console.log("creating authService now");

        // create an instance of the authentication service
        var auth = $firebaseAuth(new Firebase(database.url));

        this.login = function (credentials) {
            var self = this;
            console.log('called authService.login()');

            auth.$authWithPassword(
                credentials
            ).then(function (authData) {
                console.log("Logged in as:", authData);
                self.setUser(authData);
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            });

            return true;
        };

        // retrieve the client's current authentication state
        this.getAuth = function () {
            var authData = auth.$getAuth();

            if (authData) {
                console.log("Logged in as:", authData.uid);
            } else {
                console.log("Not logged in");
            }
            return authData;
        }

        this.isAdmin = function () {
            return this.getAuth()
                && $rootScope.user.role === 'admin';
        };

        this.getRole = function () {
            if( this.getAuth() ){
                return $rootScope.user.role;
            }else {
                return null;
            }
        };

        this.setUser = function (user) {
            $rootScope.user = user;
            // If a user authenticates using a password that means they're an admin
            if($rootScope.user.provider === "password") {
              $rootScope.user.role = 'admin';
            }
        };

        this.getUser = function () {
            return $rootScope.user;
        };

        this.registerUser = function (user) {
            // create a dummy id and set role to user
            // user.id = (userData.length + 1) + '';
            // user.role = 'user';
            //
            // userData.push(user);
            console.log('register user:',user);
            // TODO: register user with firebase
            // https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication-createusercredentials
        };

        this.logout = function () {
            console.log('called authService.logout()');
            auth.$unauth();
            $rootScope.user = null;
        };

        this.onAuth = auth.$onAuth;

        return this;

    }

})();
