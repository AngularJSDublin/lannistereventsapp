(function () {
    'use strict';

    angular
        .module('eventsApp')
        .service('eventsService', eventsService);

    eventsService.$inject = ['database'];

    function eventsService(database) {

        function listEvents() {
          return database.events();
        };

        function getEvent(index) {
          return database.events()[index];
        };

        return {
          getEvent: getEvent,
          listEvents: listEvents
        };

    }

})();
