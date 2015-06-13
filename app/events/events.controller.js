(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['eventsService'];

    function EventsCtrl(eventsService) {
        
        this.data = eventsService.listEvents();
        
    }
    
})();