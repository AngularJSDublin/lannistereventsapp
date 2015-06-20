(function () {
    'use strict';

    angular
        .module('eventsApp')
        .factory('eventsService', eventsService);

    function eventsService() {

        console.log("creating this now");

        this.listEvents = function () {

            return eventMocks;
        };

        this.getEvent = function (index) {
            return eventMocks[index];
        };

        return this;

    }

    var eventMocks = [
        {
            "id": "1",
            "name": "Wicked Wolf Comedy",
            "description": "Tuesday fortnights comedy upstairs at Wicked Wolf Blackrock (opposite Dart) new and established acts free entry",
            "date": "22.12.2015",
            "category": "arts and culture",
            "venue": "Wicked Wolf",
            "city": "Dublin",
            "location": {
                "lat": 53.3168242,
                "lng": -6.2015825
            },

            "allSpots": 12000,
            "availableSpots": 3423,
            "image_url": "https://static.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg"
    },
        {
            "id": "2",
            "name": "The Muse Creative Writing Classes",
            "description": "Join an innovative creative writing class that is fun, friendly and informative! This carefully structured 8 week course includes inventive writing games as well an introduction to the most important aspects of Creative Writing!",
            "date": "09.07.2015",
            "category": "workshops",
            "venue": "SEDA College",
            "city": "Dublin",
            "location": {
                "lat": 52.3168242,
                "lng": -6.101125
            },

            "allSpots": 80,
            "availableSpots": 36,
            "image_url": "https://static.pexels.com/photos/157/person-apple-laptop-notebook.jpg"
    }];

})();
