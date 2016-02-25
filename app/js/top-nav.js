(function() {
'use strict';

    angular
        .module('app')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$scope', 'LeftAndTopService'];
    function TopNavController($scope, LeftAndTopService) {
       console.log('getcurrent', LeftAndTopService.getCurrent());
       $scope.title =  LeftAndTopService.getCurrent();
    }
})();