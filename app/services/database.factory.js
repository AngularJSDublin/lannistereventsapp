(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('database', database);

    database.$inject = ['$firebaseArray'];

    function database($firebaseArray) {

        console.log('Init DB connection');

        var url = 'https://lannistereventsdb.firebaseio.com/';

        function categories() {
           return $firebaseArray(new Firebase(url + 'categories'));
        }

        function events() {
           return $firebaseArray(new Firebase(url + 'events'));
        }

        return {
            categories: categories,
            events: events
        };

    }

})();
