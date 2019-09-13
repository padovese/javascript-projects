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

app.controller('aController', function ($scope) {
	$scope.firstName = 'Mickey';
	$scope.lastName = 'Mouse';
	$scope.person = {
		name: 'Bruce',
		last: 'Wayme'
	}
	$scope.titles = [{
		title: 'title 1'
	},{
		title: 'title 2'
	},{
		title: 'title 3'
	}]
});

app.controller('bController', function ($scope) {

});

app.directive("someForm", function () {
	return {
		templateUrl: 'someForm.html',
		scope: {
			firstName: '@', //accept text
			lastName: '@',
			personObject: '=' //accept object
		}
	}

});

app.directive("inLine", function () {
	return {
		templateUrl: 'inLine.html',
		scope: {
			title: '@'
		},
		transclude: true, //allows to write inside de component
		link: function (scope, elements, attrs) { //Intercept the component and you can make changes
			console.log(scope.title)
			if (scope.title == 'title 2') {
				console.log(elements)
				elements.addClass('red');
			}
		}
	}

});