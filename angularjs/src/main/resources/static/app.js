let app = angular.module('app', ['ui.router'])

.config(function ($stateProvider) {
		let a = {
			name: 'a',
			url: '',
			templateUrl: 'aContent.html'
		}

		let b = {
			name: 'b',
			url: '/b',
			templateUrl: 'bContent.html'
		}

$stateProvider.state(a);
$stateProvider.state(b);

})

.service('cityService', function($http) {
   
	let self = this;
	
	this.name = 'padovao';
	this.namelenght = () => {
		return self.name.length;
	}
	this.api = function(){

		$http.get('/mock').then(
				function (result) {
					console.log(result.data);
				}, function (data, status) {
					console.log(data, status);
				});
	}
    
})

.controller('aController', function ($scope, cityService) {
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
})

.controller('bController', function ($scope, cityService) {
	console.log(cityService.name);
	console.log(cityService.namelenght());
	cityService.api();
	
//	Services are singletons. If you want to update the value, use something like this:
//	$scope.$watch('name', function(){
//		cityService.name = $scope.name;
//	});
	
})

.directive("someForm", function () {
	return {
		templateUrl: 'someForm.html',
		scope: {
			firstName: '@', //accept text
			lastName: '@',
			personObject: '=' //accept object
		}
	}

})

.directive("inLine", function () {
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