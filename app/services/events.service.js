(function () {
    'use strict';

    angular
        .module('eventsApp')
        .service('eventsService', eventsService);

    eventsService.$inject = ['database', '$firebaseArray'];

    function toArray(obj) {
        var result = [];
        for (var prop in obj) {
            var value = obj[prop];
            if (typeof value === 'object') {
                result.push(toArray(value)); // <- recursive call
            }
            else {
                result.push(value);
            }
        }
        return result;
    }

    function eventsService(database, $firebaseArray) {

        function getEvents() {

          return database.events()
        };

        return {
          getEvents: getEvents
        };

    }

})();
