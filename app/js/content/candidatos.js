(function() {
'use strict';

    angular
        .module('app')
        .controller('CandidatosController', CandidatosController);

    CandidatosController.$inject = ['$scope', '$location'];
    function CandidatosController($scope, $location) {
       
        function Candidate(args) {
            this.label = args.label;
            this.name = args.name;
            this.picture = args.picture;
            this.logo = args.logo;
            this.color = args.color;
            this.backPic = args.backPic;
        }
        
        function loadCandidates () {
            var candidates = [];
            
            candidates.push({
                details: new Candidate({
                    label: 'pedro',
                    name: 'Pedro Kuczynki',
                    picture: 'img/pedro-card.png',
                    logo: 'img/pedro-logo.png',
                    color: '#FC178F',
                    backPic: 'img/pedro-back.png'
                })
            });
            
            candidates.push({
                details: new Candidate({
                    label: 'keiko',
                    name: 'Keiko Fujimori',
                    picture: 'img/keiko-card.png',
                    logo: 'img/keiko-logo.png',
                    color: '#FF6600',
                    backPic: 'img/keiko-back.png'
                })
            });
            
            candidates.push({
                details: new Candidate({
                    label: 'alan',
                    name: 'Alan García',
                    picture: 'img/alan-card.png',
                    logo: 'img/alan-logo.png',
                    color: '#FC0204',
                    backPic: 'img/alan-back.png'
                })
            });
            
            candidates.push({
                details: new Candidate({
                    label: 'alfredo',
                    name: 'Alfredo Barnechea',
                    picture: 'img/alfredo-card.png',
                    logo: 'img/alfredo-logo.png',
                    color: '#CD3333',
                    backPic: 'img/alfredo-back.png'
                })
            });
            
            candidates.push({
                details: new Candidate({
                    label: 'julio',
                    name: 'Julio Guzmán',
                    picture: 'img/julio-card.png',
                    logo: 'img/julio-logo.png',
                    color: '#804794',
                    backPic: 'img/julio-back.png'
                })
            });
            
            candidates.push({
                details: new Candidate({
                    label: 'cesar',
                    name: 'César Acuña',
                    picture: 'img/cesar-card.png',
                    logo: 'img/cesar-logo.png',
                    color: '#004B9C',
                    backPic: 'img/cesar-back.png'
                })
            });
            
            return candidates;
        }
        
        function lunchCandidates() {
            $scope.candidates = loadCandidates();
        }
        
        $scope.goto = function(args) {
            $location.path('/button/candidatos/' + args.details.label);
        }

        function init() {
            lunchCandidates();
        }
        init();
    }
})();