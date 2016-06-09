angular.module('Togheter')
  .run(function($httpBackend) {
    $httpBackend.whenGET('languages/en-US/common.json')
      .respond(angular.toJson({
       // joinUs: "Join Us!"
      }));
    $httpBackend.whenGET('languages/pt-BR/common.json')
      .respond(angular.toJson({
       // joinUs: "Junte-se a nós!"
      }));
    $httpBackend.whenGET('languages/es/common.json')
      .respond(angular.toJson({
       // joinUs: "Únete a nosotros!"
      }));
    $httpBackend.whenGET(/.*/).passThrough();
  });