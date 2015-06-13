(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['$scope'];

    function AdminCtrl($scope) {

        $scope.title = 'Admin Page';

    }

})();
