(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['$scope','eventsService', 'authService'];

    function AdminCtrl($scope, eventsService, authService) {
        $scope.title = 'Admin Page';
        $scope.events = eventsService.listEvents();
        $scope.user = authService.getUser();
        console.log($scope.user.role);
    }

})();
