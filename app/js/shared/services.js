(function() {
'use strict';

    angular
        .module('app')
        .factory('PageDataService', PageDataService);

    PageDataService.$inject = ['PageDetails'];
    function PageDataService(PageDetails) {
        var service = {}
        var pages = [];
        service.getPages = function() {
            return pages;
        }
        
        function setupData() {
            pages.push({
                details: new PageDetails({
                    "label": "pedro",
                    "logo": 'img/pedro-logo.png',
                    "candidato": 'Pedro Kuczynki',
                    "partido": "Peruanos por el Kambio",
                    "propuestas": [
                        'Mejorar sustancialmente la seguridad ciudadana',
                        'Restablecer el dinamismo de nuestra economía',
                        'Implementar reformas para terminar con la corrupción',
                        'Inversión social para reducir la desigualdad'
                        ],
                    "color": '#FC178F',
                    "candidatopic": 'img/pedro-card.png',
                    "vicepics": ['martin-pic.png', 'mercedes-pic.png'],
                    "vicepresidentes": ['Martín Vizcarra', 'Mercedes Aráoz'],
                    "social-media": ['https://www.facebook.com/PPK-Peruanos-Por-el-Kambio-550068215134018/', 'https://twitter.com/ppkamigo', 'http://www.peruanosporelkambio.pe/']
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "keiko",
                    "logo": 'img/keiko-logo.png',
                    "candidato": 'Keiko Fujimori',
                    "partido": "Fuerza Popular",
                    "propuestas": [
                        'Fortalecimiento del modelo económico pero con inclusión social.',
                        'Bono de protección alimentaria de S/. 125 a familias en extrema pobreza.',
                        'Programa Calle Segura con participación de las juntas vecinales.',
                        'Promoción de industrias alternativas, agricultura, turismo y la agroindustria.'
                        ],
                    "color": '#FF6600',
                    "candidatopic": 'img/keiko-card.png',
                    "vicepics": ['jose-pic.png', 'vladimiro-pic.png'],
                    "vicepresidentes": ['José Chlimper', 'Vladimiro Huaroc'],
                    "social-media": ['facebook.com/pfuerzapopular', 'https://twitter.com/PFuerzaPopular?ref_src=twsrc%5Etfw', 'http://keikofujimori.pe/']
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "alan",
                    "logo": 'img/alan-logo.png',
                    "candidato": 'Alan García',
                    "partido": "APRA",
                    "propuestas": [
                        'Romper con las trabas burocráticas para la inversión con el fin de aumentar la ejecución',
                        'Crear un canon comunal y que la propiedad del suelo también incluya la del subsuelo',
                        'Reducir las altas tasas de intereses de las tarjetas de crédito.',
                        'Incremenetar la Remuneració Mínima Vital'
                        ],
                    "color": '#FC0204',
                    "candidatopic": 'img/alan-card.png',
                    "vicepics": ['lourdes-pic.png', 'david-pic.png'],
                    "vicepresidentes": ['Lourdes Flores', 'David Salazar'],
                    "social-media": ['https://www.facebook.com/PartidoApristaPeruanoORG', 'https://twitter.com/alangarciaperu', 'http://www.apra.org.pe/']
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "alfredo",
                    "logo": 'img/alfredo-logo.png',
                    "candidato": 'Alfredo Barnechea',
                    "partido": "Acción Popular",
                    "propuestas": [
                        'Dinamizar la economía a través de la agricultura consolidando la tecnología.',
                        'Asegurar la educación y el empleo para favorecer el capital humano.',
                        'Bajar en 1% el Impuesto General a las ventas (IGV), del 18 al 17%.',
                        'Del 30% del IGV, el 3% será reinvertido para incremenetar la demanda de la mano de obra.'
                        ],
                    "color": '#CD3333',
                    "candidatopic": 'img/alfredo-card.png',
                    "vicepics": ['victor-pic.png', 'edmundo-pic.png'],
                    "vicepresidentes": ['Víctor García Belaúnde', 'Edmundo del Águila'],
                    "social-media": ['https://www.facebook.com/partidoaccionpopular?fref=ts', 'https://twitter.com/accionpopular', 'http://accionpopular.com.pe/']
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "julio",
                    "logo": 'img/julio-logo.png',
                    "candidato": 'Julio Guzmán',
                    "partido": "Todos por el Perú",
                    "propuestas": [
                        'Diversificar la economía para tener Ingresos previsibles y crecientes para todos',
                        'Educar para descubrir los talentos de todos',
                        'Desarrollar la Conectividad para integrarnos al resto del país y al mundo',
                        'Mejorar el clima de negocios para todos'
                        ],
                    "color": '#804794',
                    "candidatopic": 'img/julio-card.png',
                    "vicepics": ['juaan-pic.png', 'carolina-pic.png'],
                    "vicepresidentes": ['Juana Maura', 'Carolina Lizárraga'],
                    "social-media": ['https://www.facebook.com/julioguzman2016', 'https://twitter.com/julioguzmanperu', 'http://julioguzman.pe/']
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "cesar",
                    "logo": 'img/cesar-logo.png',
                    "candidato": 'César Acuña',
                    "partido": "Alianza para el Progreso del Perú",
                    "propuestas": [
                        'Dar al Centro de Planeamiento Estratégico (Ceplan) rango de ministerio',
                        'Invertir en tecnología para subir un nivel más en el ciclo de producción',
                        'Implementar programas sociales para sectores no atendidos y con necesidades específicas',
                        'Comenzar la construcción de el "Tren bala" de Tacna a Tumbes'
                        ],
                    "vicepresidentes": ['Anel Townsend', 'Humberto Lay'],
                    "social-media": ['https://www.facebook.com/PeruAPP/app/425088890879889/', 'https://twitter.com/APP_Peru', 'http://www.app.pe/'],
                    "color": '#004B9C',
                    "candidatopic": 'img/pedro-card.png',
                    "vicepics": ['anel-pic.png', 'humberto-pic.png'],
                })
            });
            
        }
        
        service.getPage = function(name) {
            var result;
            angular.forEach(service.getPages(), function(page) {
                if (page.details.label === name) {
                    result = page; return;
                 };
            })
            return result;
        }

        var init = function () {
            setupData();
        };
        
        init();
        return service;
    }
})();