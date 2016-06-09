angular.module('Togheter')
.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })


.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'templates/pages/home/index.html',
		resolve: {
		    langs: function (locale) {
		      return locale.ready('common');
    	}
    }

	})


	.when('/auth', {
		templateUrl: 'templates/pages/auth/index.html',
		controller: 'AuthController',
		controllerAs: 'authController',
		resolve: {
		    langs: function (locale) {
		      return locale.ready('common');
    	}
    }

	})


	.otherwise({ redirectTo: '/' });


 // Add HTML5 History API support
  $locationProvider.html5Mode(true);

});
