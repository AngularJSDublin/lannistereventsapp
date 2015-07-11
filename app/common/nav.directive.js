(function () {
    'use strict';

    angular
    .module('eventsApp')
    .directive('checkActiveNav', checkActiveNav);


    checkActiveNav.$inject = ['$location'];

    function checkActiveNav($location) {
        return {
            restrict: 'A',
            link: function($scope, elem, attrs) {

                function setActiveTab () {

                    var index = $location.path().indexOf(elem.find('a').attr('href').replace('/#', ''));

                    if (index != -1) {
                        $('[check-active-nav]').removeClass('active');
                        elem.addClass('active');
                    }
                }

                $scope.$on('$locationChangeSuccess', function(e) {
                    setActiveTab();
                });
            }
        };
    }

    // example
    // <nav-item title="Events" path=""></nav-item>

})();
