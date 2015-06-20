(function () {
    'use strict';

    angular
    .module('eventsApp')
    .factory('authService', authService);

    function authService() {

        console.log("creating authService now");

        this.getUser = function() {
            return authMocks;
        };

        return this;

    }

    var authMocks = userData[0]
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

})();
