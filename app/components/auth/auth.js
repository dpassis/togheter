define(['angular'], function (angular) {
	var app = angular.module('Togheter.auth',[]);

app.controller('authController',['$scope', '$routeParams', function ($scope, $routeParams){

	$scope.name = "authController";
    $scope.params = $routeParams;

}]);

});