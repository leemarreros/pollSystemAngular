(function() {
    'use strict';
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/start.html'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
    
    
})();