(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['$scope','eventsService', '$routeParams'];

    function EventsCtrl($scope, eventsService, $routeParams) {

        console.log($routeParams);

        $scope.title = 'Events Page';

        eventsService.getEvents().$loaded().then(function(data) {
          $scope.events = data;
          $scope.singleEvent = data[$routeParams.id];
        }).catch(function(error) {
          console.log("Error getting events:", error);
        });
    }

    angular
        .module('eventsApp')
        .controller('CreateEventCtrl', CreateEventCtrl);

    CreateEventCtrl.$inject = ['$scope','eventsService', '$routeParams'];

    function CreateEventCtrl($scope, eventsService, $routeParams) {

        console.log($routeParams);

        $scope.title = 'Create Events Page';

        $scope.submitForm = function(isValid) {
            console.log("Submit Form...Status is : " + isValid);
            return true;
        };
    }
})();
