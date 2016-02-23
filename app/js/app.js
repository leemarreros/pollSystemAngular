(function() {
    'use strict';
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            redirectTo: '/button/candidatos'
        });
        
        $routeProvider.when('/button/candidatos', {
            templateUrl: 'partials/candidatos.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html'
        });
        
        $routeProvider.when('/button/encuesta', {
            templateUrl: 'partials/encuesta.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html'
        });
        
        $routeProvider.when('/button/perfil', {
            templateUrl: 'partials/perfil.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html'
        });
        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
    
    
})();