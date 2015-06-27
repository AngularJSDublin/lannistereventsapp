(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('authService', authService);

    authService.$inject = ['$rootScope', 'database', '$firebaseAuth'];

    function authService($rootScope, database, $firebaseAuth) {

        console.log("creating authService now");

        // create an instance of the authentication service
        var auth = $firebaseAuth(new Firebase(database.url));

        var userData = [
            {
                "id": "1",
                "name": "User1",
                "role": "user",
                "email": "allentv4u@gmail.com"
            },
            {
                "id": "2",
                "name": "User2",
                "role": "admin",
                "email": "graham@hrpr.co"
            }
        ];
        var user = userData[1];



        this.login = function (credentials) {
            console.log('authService.login()');

            auth.$authWithPassword(
                credentials
            ).then(function (authData) {
                console.log("Logged in as:", authData);
               $rootScope.user = authData;
               $rootScope.user.role = 'admin';    
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            });

            return true;
        };

        this.isAuthenticated = function () {
            return typeof $rootScope.user != 'undefined';
        };
        
        this.isAdmin = function () {
            return this.isAuthenticated() 
                && $rootScope.user.provider === "password";
        };
        
        this.getRole = function () {
            if( this.isAdmin() ){
                return 'admin'; 
            }else {
                return 'anon';
            }
        };

        this.setUser = function (user) {
            $rootScope.user = user;
        };

        this.getUser = function () {
            return $rootScope.user;
        };

        this.getUsers = function () {
            return userData;
        }

        this.registerUser = function (user) {

            // create a dummy id and set role to user
            user.id = (userData.length + 1) + '';
            user.role = 'user';

            userData.push(user);
        };

        return this;

    }

})();