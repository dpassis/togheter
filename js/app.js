
// add ngRoute module
angular.module("Togheter", ['ngRoute',
							'ngMockE2E',
							'ngSanitize',
							'ngLocalize'])
.value('localeSupported', [
    'en-US',
    'pt-BR',
    'es'
  ])
.controller('ExampleCtrl', function ($scope, locale) {
	$scope.setLocale = locale.setLocale;

	console.log(locale.getLocale());
});