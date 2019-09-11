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

});

app.controller('bController', function ($scope) {

});

app.directive("someForm", function(){
	return{
		template: '<form>First name:<br><input type="text" name="firstname" value="Mickey"><br>Last name:<br><input type="text" name="lastname" value="Mouse"><br><br><input type="submit" value="Submit"></form>'
	}

});