(function () {
    'use strict';

    angular
        .module('eventsApp.LoginCtrl',[])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$routeParams', 'authService', '$rootScope'];

    function LoginCtrl($scope, $routeParams, authService, $rootScope) {
        // console.log('$rootScope.user: '+$rootScope.user);

        $scope.credentials = {
            email: "",
            password: ""
        };

        $scope.login = function () {
            authService.login($scope.credentials);
        };

    }

})();
