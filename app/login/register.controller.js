(function () {
    'use strict';

    angular
    .module('eventsApp')
    .controller('RegisterCtrl', RegisterCtrl);

    function RegisterCtrl($scope, authService, $location) {

        $scope.register = function(user, form) {
            // if form is invalid show error message
            if(form.$invalid) {
                return;
            }

            // register user with service hereand clear model on scope
            authService.registerUser(user);

            // clear the register form
            $scope.newUser = {};

            // redirect to login page
            $location.path('/login');
        };

    }

})();
