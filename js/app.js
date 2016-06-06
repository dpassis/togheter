
angular.module('Togheter')
.config(function($routeProvider) {

	$routeProvider.when('/notes', {
		templateUrl: 'templates/pages/notes/index.html',
		controller: 'NotesIndexController',
		controllerAs: 'indexController'
	})

	.when('/users', {
		templateUrl: 'templates/pages/users/index.html',
	})

	.otherwise({ redirectTo: '/' });

});
});