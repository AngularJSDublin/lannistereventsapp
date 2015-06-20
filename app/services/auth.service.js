(function () {
    'use strict';

    angular
    .module('eventsApp')
    .factory('authService', authService);

    authService.$inject = ['$rootScope'];

    function authService($rootScope) {

        console.log("creating authService now");

        var userData = [
            {
                "id": "1",
                "name": "User1",
                "role": "user",
                "email": "allentv4u@gmail.com"
            },
            {
                "id": "2",
                "name": "User2",
                "role": "admin",
                "email": "graham@hrpr.co"
            }
        ];
        var user = userData[1];

        this.login = function() {
          console.log('authService.login()');
          this.setUser(user);
          return true;
        };

        this.isAuthenticated = function() {
          if($rootScope.user) {
            return true;
          }else {
            return false;
          }
        };

        this.setUser = function(user) {
          $rootScope.user = user;
        };

        this.getUser = function() {
            return $rootScope.user;
        };

        return this;

    }

})();
