(function() {
    'use strict';
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'ngtweet'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            redirectTo: '/button/candidatos'
        });
        
        $routeProvider.when('/button/candidatos', {
            templateUrl: 'partials/content/candidatos.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html',
            controller: 'CandidatosController'
        });
        
        $routeProvider.when('/button/encuesta', {
            templateUrl: 'partials/content/encuesta.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html',
            controller: 'PollController',
            resolve: {
                pollData: ['PollDataService', '$route', function(PollDataService, $route) {
                    return PollDataService.getCandidates();
                }]
            }
        });
        
        $routeProvider.when('/button/perfil', {
            templateUrl: 'partials/content/perfil.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html'
        });
        
        $routeProvider.when('/button/candidatos/:id', {
            templateUrl: 'partials/content/candidato-detail.html',
            topNav: 'partials/top-nav.html',
            leftNav: 'partials/left-nav.html',
            controller: 'CandidatoPageController',
            resolve: {
                detailsCandidate: ['PageDataService', '$route', function (PageDataService, $route) {
                    return PageDataService.getPage($route.current.params.id);
                }],
            }
        })
        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
    
    
})();