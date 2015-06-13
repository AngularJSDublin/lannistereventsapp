(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['eventsService', '$scope'];

    function EventsCtrl(eventsService, $scope) {

        $scope.title = 'Events Page';

        this.data = eventsService.listEvents();

    }

})();
