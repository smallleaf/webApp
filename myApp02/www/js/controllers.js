var app = angular.module('myApp.controllers', ['ionic']);

app.controller('homeController', function($scope){
	$scope.items = [];
	for(var i=0;i<50;i++)
		$scope.items.push(["item",i+1].join(""));
})
