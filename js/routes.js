angular.module('Togheter')
.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })



.config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/auth', {
		templateUrl: 'templates/pages/auth/index.html',
		controller: 'AuthController',
		controllerAs: 'authController'
	})

	.when('/home', {
		templateUrl: 'templates/pages/home/index.html',

	})

	.otherwise({ redirectTo: '/' });


	// configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);

});
