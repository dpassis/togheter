angular.module('Togheter')
.controller('AuthController',['$scope', '$routeParams', function ($scope, $routeParams){

	$scope.name = "AuthController";
    $scope.params = $routeParams;

}]);