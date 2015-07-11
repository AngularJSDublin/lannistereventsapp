(function () {
    'use strict';

    angular
        .module('eventsApp')
        .service('eventsService', eventsService);

    eventsService.$inject = ['$firebaseArray','FIREBASE_URL'];

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

    function eventsService($firebaseArray, FIREBASE_URL) {
        var firebase = new Firebase(FIREBASE_URL);
        var eventsRef = firebase.child('events');

        function getEvents() {
          return $firebaseArray(eventsRef);
        };

        return {
          getEvents: getEvents
        };

    }

})();
