(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('database', database);

    database.$inject = ['$firebaseArray'];

    function database($firebaseArray) {
        
        console.log('Init DB connection');
        
        var db = "https://lannistereventsdb.firebaseio.com/";
        //var db = "https://docs-sandbox.firebaseio.com/af/intro/demo/";

        // create a reference to the Firebase database where we will store our data
        var randomId = Math.round(Math.random() * 100000000);
        var ref = new Firebase(db + randomId);

        // this uses AngularFire to create the synchronized array
        return $firebaseArray(ref);
    }

})();