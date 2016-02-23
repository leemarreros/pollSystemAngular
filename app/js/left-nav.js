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
        }
        
        function createButtons() {
            var buttons = [];
            buttons.push({
                details: new Button({
                    name: "candidatos",
                    title: "Candidatos",
                    imageActive: "img/icon-candidato-active.png",
                    image: "img/icon-candidato.png"
                })
            })
            buttons.push({
                details: new Button({
                    name: "encuesta",
                    title: "Encuesta",
                    imageAct: "img/icon-encuesta-active.png",
                    image: "img/icon-encuesta.png"
                })
            })
            buttons.push({
                details: new Button({
                    name: "perfil",
                    title: "Perfil",
                    imageAct: "img/icon-perfil-active.png",
                    image: "img/icon-perfil.png"
                })
            })
            return buttons;
        }
                                
        function lunchButtons() {
            $scope.buttons = createButtons();
        }
        
        $scope.goto = function(button) {
            $location.path('/button/' + button.details.name)
        }
        
        function init() {
            lunchButtons();
        }
        init();
    }
})();