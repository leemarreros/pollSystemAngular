(function() {
'use strict';

    angular
        .module('app')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$scope', 'LeftAndTopService', 'UpdatePictureService', '$timeout', '$location'];
    function TopNavController($scope, LeftAndTopService, UpdatePictureService, $timeout, $location) {
       
       $scope.name = UpdatePictureService.getUserData().name;
       $scope.title =  LeftAndTopService.getCurrent();
       $scope.image =  UpdatePictureService;      
       $scope.pictureProfile = UpdatePictureService.retrievePic();
       $scope.$watch('image', function(newValue, oldValue) {
           if(newValue) {
                $timeout(function() {
                    var path = UpdatePictureService.retrievePicPath();
                    var userData = UpdatePictureService.getUserData();
                    if (path) {
                        $scope.pictureProfile = path;    
                    } else {
                        $scope.pictureProfile = UpdatePictureService.retrievePic();
                    }
                    
                    if (userData) {
                        $scope.name = userData.name;
                    } else {
                        $scope.name = "No name";
                    }
                }, 100);
           }
       }, true);
       
       $scope.goto = function(destiny) {
           $location.path('/button/' + destiny);
       }
       
    }
})();