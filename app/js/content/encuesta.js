(function() {
'use strict';

    angular
        .module('app')
        .controller('PollController', PollController);

    PollController.$inject = ['$scope', 'PollDataService', 'pollData'];
    function PollController($scope, PollDataService, pollData) {
        var userHasVoted = false;
        var total;
        var lastSelected;

        function calculateTotal() {
            total=0;            
            angular.forEach(pollData, function(poll) {
                total+=poll.details.votes;
            })
            $scope.total = total;
        }
        
        var init = function() {
            calculateTotal();
            $scope.pollData = pollData;
        };
        
        $scope.getPercentage = function(votes) {
            return (votes/$scope.total);
        }
        
        
        $scope.callVote = function(name) {
            if(!userHasVoted) {
                userHasVoted = true;
                PollDataService.executeVote(name);
                lastSelected = name;
                calculateTotal()
                return;
            }
            
            if (name == lastSelected) {
                userHasVoted = false;
                lastSelected = null;
                PollDataService.reverseVote(name);
                calculateTotal()
                return;
            }
            
            if (name != lastSelected) {
                PollDataService.reverseVote(lastSelected);
                PollDataService.executeVote(name);
                lastSelected = name;
                calculateTotal()
                return;
            }
        }
        
        init();
    }
})();