(function () {
    'use strict';

    angular
    .module('eventsApp')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$routeParams', 'authService'];

    function LoginCtrl($scope, $routeParams, authService) {
        $rootScope.user = authService.getUser();
        console.log($scope.user.role);
    }

})();
