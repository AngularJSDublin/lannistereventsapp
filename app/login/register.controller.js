(function () {
    'use strict';

    angular
    .module('eventsApp')
    .controller('RegisterCtrl', RegisterCtrl);

    function RegisterCtrl($scope, userService, $location) {

        $scope.register = function(user, form) {
            // if form is invalid show error message
            if(form.$invalid) {
                return;
            }

            userService
            .registerUser(user)
            .then(function(data) {
                // clear the register form
                $scope.newUser = {};
                // redirect to login page
                $location.path('/login');


            }).catch(function(err) {
                console.log(err);
            });

        };

        userService.getUsers().$loaded().then(function(users) {
            console.log(users);
        });

    }

})();
