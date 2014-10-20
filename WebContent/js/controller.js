var app = angular.module("userIdm", []);

app.controller("homeController", function($scope) {
	$scope.persons = [
	                 {
	                	 "name":"Arc",
	                	 "sex":"male"
	                 }, 
	                 {
	                	 "name":"Jimmy",
	                	 "sex":"male"
	                 }
	                 ];
});