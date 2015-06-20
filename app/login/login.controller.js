(function () {
    'use strict';

    angular
    .module('eventsApp')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$routeParams', 'authService', '$rootScope'];

    function LoginCtrl($scope, $routeParams, authService, $rootScope) {
        console.log($rootScope.user.role);
    }

})();
