(function () {
    'use strict';

    angular
        .module('eventsApp')
        .service('eventsService', eventsService);
    
     eventsService.$inject = ['database'];

    function eventsService(database) {
        
        var service = {
            getEvent: getEvent,
            listEvents: listEvents
        };
        return service;
        
        /////////

        function listEvents() {
            return database.events();
        };

        function getEvent(index) {
            return database.events()[index];
        };

    }

})();
