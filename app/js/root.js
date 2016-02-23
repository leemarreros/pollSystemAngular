(function() {
'use strict';

    angular
        .module('app')
        .controller('RootController', RootController);

    RootController.$inject = ['$scope'];
    function RootController($scope) {
        
        $scope.$on('$routeChangeSuccess', function(e, current, previous) {
            $scope.currentRoute = current;
        })
    }
})();