(function () {
    'use strict';

    angular.module('eventsApp')
    .factory('userService',UserService);

    function UserService(database, $firebaseAuth, $q) {

        var auth = $firebaseAuth(new Firebase(database.url));

        // console.log(database.users());

        this.registerUser = function(newUser) {

            var defer = $q.defer();

            auth.$createUser({
                email: newUser.email,
                password: newUser.password
            }).then(function(authData) {

               var user = {};

               user.name = newUser.name;
               user.email = newUser.email;
               user.uid = authData.uid;
               user.role = 'user';

                return database.users().$add(user);
            }).then(function(userData) {
                defer.resolve(userData);
            }).catch(function(err) {
                defer.reject(err);
            });

            // return the promise
            return defer.promise;
        }

        this.getUsers = function() {
            return database.users();
        }

        return this;
    }


})();
