(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['$scope','eventsService', '$routeParams'];

    function EventsCtrl($scope, eventsService, $routeParams) {

        console.log($routeParams);

        $scope.title = 'Events Page';

        eventsService.getEvents().then(function(data) {
          $scope.events = data;
          $scope.singleEvent = data[$routeParams.id];
        }).catch(function(error) {
          console.log("Error getting events:", error);
        });

        //console.log('Suhaib event test '+$routeParams.id);
        //$scope.singleEvent = $scope.events.filter(function(item) {
        //    return item.id === $routeParams.id;
        //})[0];

    }

})();
