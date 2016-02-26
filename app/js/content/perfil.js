(function() {
'use strict';

    angular
        .module('app')
        .controller('ProfileUpdateController', ProfileUpdateController);

    ProfileUpdateController.$inject = ['$scope', 'GetUserDataService', 'userData', 'Upload', 'UpdatePictureService'];
    function ProfileUpdateController($scope, GetUserDataService, userData, Upload, UpdatePictureService) {
        $scope.uploaded = false;
        $scope.picFile = null;
        $scope.userData = null;
        
        $scope.loadedPicture = UpdatePictureService.retrievePic();
        $scope.$watch('picFile', function(newValue, oldValue) {
            if (newValue) {
                $scope.uploaded = true;
                $scope.loadedPicture = newValue.path;
                UpdatePictureService.storePicPath(newValue.path);
                var fileReader = new FileReader(); 
                fileReader.readAsDataURL(newValue);
                fileReader.onload = function(e) {
                    UpdatePictureService.storeImage(e.target.result);
                }
            }
        })
        
        $scope.$watch('user', function(newValue, oldValue) {
            if (newValue) {
                UpdatePictureService.storeUserData(newValue);
            }
        }, true);
        
        
        $scope.update = function(userData) {
            UpdatePictureService.storeUserData(userData);
        }
        
        var init = function() {
            //  $scope.userData = userData;
            $scope.user = UpdatePictureService.getUserData();
        };
        
        init();
    }
})();