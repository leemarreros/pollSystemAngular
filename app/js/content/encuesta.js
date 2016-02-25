(function() {
'use strict';

    angular
        .module('app')
        .controller('PollController', PollController);

    PollController.$inject = ['$scope', 'PollDataService', 'pollData'];
    function PollController($scope, PollDataService, pollData) {
        console.log(PollDataService.getCandidates());
        console.log(pollData);
        var init = function() {
            
        };
        init();
    }
})();