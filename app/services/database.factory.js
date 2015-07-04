(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('database', database);

    database.$inject = ['$firebaseArray', '$firebaseObject'];

    function database($firebaseArray, $firebaseObject) {

        console.log('Init DB connection');

        var url = 'https://lannistereventsdb.firebaseio.com/';

        function url() {
           return url;
        }

        function categories() {
           return $firebaseArray(new Firebase(url + 'categories'));
        }

        function events() {
            return $firebaseArray(new Firebase(url + 'events'));
        }

        function users() {
            return $firebaseArray(new Firebase(url + 'user_details'));
        }

        return {
            url,
            categories: categories,
            events: events,
            users: users
        };

    }

})();
