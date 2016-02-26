(function() {
'use strict';

    angular
        .module('app')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$scope', 'LeftAndTopService', 'UpdatePictureService', '$timeout'];
    function TopNavController($scope, LeftAndTopService, UpdatePictureService, $timeout) {

       console.log('getcurrent', LeftAndTopService.getCurrent());
       $scope.title =  LeftAndTopService.getCurrent();
       $scope.image =  UpdatePictureService;      
       $scope.pictureProfile = UpdatePictureService.retrievePic();
       $scope.$watch('image', function(newValue, oldValue) {
            $timeout(function() {
                var path = UpdatePictureService.retrievePicPath();
                if (path) {
                    $scope.pictureProfile = path;    
                } else {
                    $scope.pictureProfile = UpdatePictureService.retrievePic();
                }
            }, 100);
       }, true);
       
       
    }
})();