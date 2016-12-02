var app=angular.module("myApp",[]);

app.controller("myCtrl",function($scope,myService){
	myService.json(function(input){
		$scope.store=input;
		console.log($scope.store);
	})
});

app.service("myService",function($http){
	this.json=function(callback){
		$http.get("js/lessJson.js")
		.success(function(data){
			callback(data);
		})
		.error(function(data){
			alert("sorry");
		})
	}
});