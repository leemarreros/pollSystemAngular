(function() {
'use strict';

    angular
        .module('app')
        .factory('PageDetails', PageDetails);

    function PageDetails() {
        function CandidatoPage(args) {
            this.label = args.label;
            this.candidato = args.candidato;
            this.partido = args.partido;
            this.propuestas = args.propuestas;
            this.vicepresidentes = args.vicepresidentes;
            this.social_media = args.social_media;
        }
        return CandidatoPage;
    }
})();