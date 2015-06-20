(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['$scope','eventsService'];

    function AdminCtrl($scope, eventsService) {

        $scope.title = 'Admin Page';

        $scope.userRole = 'admin';

        $scope.events = eventsService.listEvents();

    }

})();
