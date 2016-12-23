var app=angular.module("responsiveApp",[]);

app.directive("firstNavBar",function(){
	return{
		restrict:"E",
		templateUrl:"../view/firstNavDirective.html"
	}
});

app.directive("sideNav",function(){
	return{
		restrict:"E",
		templateUrl:"../view/secondNavDirective.html"
	}
});

// app.controller("bootstrapExampleCtrl",function($scope,bootstrapExampleService){
// 	bootstrapExampleService.getBootstrapExampleData()
// 	.then(function(inputFromService){
// 		$scope.inputData=inputFromService;
// 		console.log($scope.inputData);
// 	},function(inputFromService){
// 		alert("sorry");
// 	});
// });

// app.service("bootstrapExampleService",function($http,$q){
	
// 	this.getBootstrapExampleData=function(){
// 		var deferService=$q.defer();
// 		return $http.get("../view/bootstrapExample.json")
// 		.then(function(response){
// 			console.log("hai");
// 			deferService.resolve(response.data);
// 			console.log(response.data);
// 			return deferService.promise;
// 		},function(response){
// 			deferService.reject(response);
// 			return deferService.promise;
// 		});
// 	}
	
// });