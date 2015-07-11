(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('userService', UserService);

    UserService.$inject = ['database', '$firebaseAuth', '$firebaseObject'];

    function UserService(database, $firebaseAuth, $firebaseObject) {
        var firebase = new Firebase(database.url);
        var auth = $firebaseAuth(firebase);
        var usersRef = firebase.child('users');

        // saves user data
        function _saveUserData(userData, newUser){
            // console.log(userData, newUser);
            // get the object we want to modify (or create if it doesn't exist)
            var userRef = $firebaseObject(usersRef.child(userData.uid));
            // assign the data to save
            userRef.name = newUser.name;
            userRef.role = newUser.role;
            // save the data
            return userRef.$save();
        };

        // creates a user account
        // returns a promise that will resolve
        // to a firebase user object reference
        this.createUser = function(newUser) {
            // console.log(newUser);
            var newUserData = {
                name: newUser.name,
                role: newUser.role,
            };

            return auth.$createUser({
                email: newUser.email,
                password: newUser.password,
            }).then(function(userData) {
                console.log("User " + userData.uid + " created successfully!");
                return _saveUserData(userData, newUser);
            });
        }

        // get all users
        this.getUsers = function() {
            console.log('getUsers()');
            return $firebaseObject(usersRef);
        }

        // get a specific user by uid
        this.getUser = function(uid) {
            console.log('getUser: ' + uid);
            return $firebaseObject( usersRef.child(uid) );
        };

        return this;
    }

})();
