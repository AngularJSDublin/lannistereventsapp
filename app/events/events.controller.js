(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['$scope','eventsService'];

    function EventsCtrl($scope,eventsService) {

        $scope.title = 'Events Page';

        $scope.events = eventsService.listEvents();

    }

})();
