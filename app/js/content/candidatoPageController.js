(function() {
'use strict';

    angular
        .module('app')
        .controller('CandidatoPageController', CandidatoPageController);

    CandidatoPageController.$inject = ['$scope', 'PageDataService', 'detailsCandidate', 'TwitterService'];
    function CandidatoPageController($scope, PageDataService, detailsCandidate, TwitterService) {
        TwitterService.destroyAllWidgets();
        TwitterService.loadAllWidgets();
        var init = function() {
            $scope.pageInfo = detailsCandidate;
        };
        init();
    }
})();