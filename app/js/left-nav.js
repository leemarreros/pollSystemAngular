(function() {
'use strict';

    angular
        .module('app')
        .controller('LeftNavController', LeftNavController);

    LeftNavController.$inject = ['$scope', '$location'];
    function LeftNavController($scope, $location) {
        
        function Button(args) {
            this.name = args.name;
            this.title = args.title;
            this.imageAct = args.imageAct;
            this.image = args.image;
            this.activated = args.activated;
        }
        
        var buttons = [];
        function createButtons() {
            buttons.push({
                details: new Button({
                    name: "candidatos",
                    title: "Candidatos",
                    imageAct: "img/icon-candidatos-active.png",
                    image: "img/icon-candidatos.png",
                    activated: true,
                })
            })
            buttons.push({
                details: new Button({
                    name: "encuesta",
                    title: "Encuesta",
                    imageAct: "img/icon-encuesta-active.png",
                    image: "img/icon-encuesta.png",
                    activated: false,
                })
            })
            buttons.push({
                details: new Button({
                    name: "perfil",
                    title: "Perfil",
                    imageAct: "img/icon-perfil-active.png",
                    image: "img/icon-perfil.png",
                    activated: false,
                })
            })
            return buttons;
        }
                                
        function lunchButtons() {
            $scope.buttons = createButtons();
        }
        var lastSelected = "candidatos";
        
        $scope.goto = function(button) {
            if (lastSelected == button.details.name){
                return;
            }
            angular.forEach(buttons, function(buttonCurrent) {
                if (buttonCurrent.details.name == lastSelected) buttonCurrent.details.activated = false;
                if (buttonCurrent.details.name == button.details.name) buttonCurrent.details.activated = true;
            })
            console.log(buttons);
            lastSelected = button.details.name;
            $location.path('/button/' + button.details.name)
        }
        
        function init() {
            lunchButtons();
        }
        init();
    }
})();