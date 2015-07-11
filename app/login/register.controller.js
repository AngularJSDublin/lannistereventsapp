(function () {
    'use strict';

    angular
    .module('eventsApp.RegisterCtrl',[])
    .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$scope','userService', '$location', 'authService'];

    function RegisterCtrl($scope, userService, $location, authService) {

        $scope.newUser = {
            name: '',
            email: '',
            role: 'user',
        }

        $scope.register = function(user, form) {
            // if form is invalid show error message
            if(form.$invalid) {
                return;
            }

            // if no role is set then default to 'user' role
            if(typeof user.role === 'undefined') {
                // console.log('default role to 'user');
                user.role = 'user';
            }

            // create the user
            var createdUser = userService.createUser(user);

            // if user is not logged in then this is self-registration
            if(!authService.getAuth()) {
                createdUser.then(function(ref) {
                    // console.log(user.role + ' created!');
                    // console.log(ref.key());

                    // empty the registration form
                    $scope.newUser = {};
                    $scope.newUser.role = 'user';

                    // log the user in
                    return authService.login({
                        email: user.email,
                        password: user.password,
                    });
                }).then(function(authData) {
                    // console.log(authData);
                    // console.log("Logged in as:", authData.uid);
                    $location.path( "/" );
                }).catch(function(error) {
                    console.error("Error: ", error);
                });
            }else {
                // user is already logged in so they're
                // registering someone else
                createdUser.then(function(ref) {
                    // console.log(user.role + ' created!');
                    // console.log(ref.key());

                    // empty the registration form
                    $scope.newUser = {};
                    $scope.newUser.role = 'admin';
                });
            }


        };

    }

})();
