(function() {
'use strict';

    angular
        .module('app')
        .factory('PageDetails', PageDetails);

    function PageDetails() {
        function CandidatoPage(args) {
            this.label = args.label;
            this.color = args.color;
            this.logo = args.logo;
            this.candidato = args.candidato;
            this.candidatopic = args.candidatopic;
            this.partido = args.partido;
            this.propuestas = args.propuestas;
            this.vicepresidentes = args.vicepresidentes;
            this.vicepics = args.vicepics;
            this.social_media = args.social_media;
            this.tweeterid = args.tweeterid; 
        }
        return CandidatoPage;
    }
})();