(function() {
'use strict';

    angular
        .module('app')
        .controller('CandidatoPageController', CandidatoPageController);

    CandidatoPageController.$inject = ['$scope', 'PageDataService', 'detailsCandidate'];
    function CandidatoPageController($scope, PageDataService, detailsCandidate) {
        
        var init = function() {
            console.log('init CandidatoPageController', detailsCandidate);
            $scope.pageInfo = detailsCandidate;
        };
        init();
    }
})();