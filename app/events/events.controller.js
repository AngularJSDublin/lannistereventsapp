(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['$scope','eventsService', '$routeParams'];

    function EventsCtrl($scope,eventsService, $routeParams) {

        console.log($routeParams);

        $scope.title = 'Events Page';

        $scope.events = eventsService.listEvents();

        $scope.singleEvent = eventsService.getEvent($routeParams.id);
        
        //$scope.singleEvent = $scope.events.filter(function(item) {
        //    return item.id === $routeParams.id;
        //})[0];

    }

})();
