let app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'aContent.html',
			controller: 'aController'
		})

		.when("/b", {
			templateUrl: 'bContent.html',
			controller: 'bController'
		})
});

app.controller('aController', function ($scope){
	$scope.firstName = 'Mickey';
	$scope.lastName = 'Mouse';
	$scope.person = {
		name: 'Bruce',
		lastName: 'Wayme'
	}
});

app.controller('bController', function ($scope) {

});

app.directive("someForm", function(){
	return{
		templateUrl: 'someForm.html',
		scope: { 
			firstName: '@', //accept text
			lastName: '@',
			person: "=" //accept object
		}
	}

});