(function() {
'use strict';

    angular
        .module('app')
        .controller('PollController', PollController);

    PollController.$inject = ['$scope', 'PollDataService', 'pollData'];
    function PollController($scope, PollDataService, pollData) {
        var userHasVoted = false;
        var total=0;
        angular.forEach(pollData, function(poll) {
            total+=poll.details.votes;
        })
        var init = function() {
            $scope.pollData = pollData;
            $scope.total = total;
        };
        
        $scope.getPercentage = function(votes) {
            return (votes/$scope.total);
        }
        
        
        $scope.callVote = function(name) {
            // verify if user already voted
            // var index = PollDataService.verifyVote(name);
            var lastSelected;
            if(!userHasVoted) {
                userHasVoted = true;
                PollDataService.executeVote(name);
                lastSelected = name;
                return;
            }
            
        }
        
        init();
    }
})();