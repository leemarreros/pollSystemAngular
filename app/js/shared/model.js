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


(function() {
'use strict';

    angular
        .module('app')
        .factory('PollDetails', PollDetails);

    function PollDetails() {
        function PollCandidate(args) {
            this.name = args.name;
            this.color = args.color;
            this.picture = args.picture;
            this.votes = args.votes;
            this.percentage = args.percentage;
            this.selected = args.selected;
        }
        return PollCandidate;
    }
})();