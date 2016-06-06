angular.module('Togheter')
.config(function($routeProvider) {

	$routeProvider.when('/auth', {
		templateUrl: 'templates/pages/auth/index.html',
		controller: 'AuthController',
		controllerAs: 'authController'
	})

	.when('/home', {
		templateUrl: 'templates/pages/home/index.html',

	})

	.otherwise({ redirectTo: '/' });

});
