var app=angular.module("dynamicApp",[]);

app.controller("dynamicCtrl",function($scope){
	$scope.name="";
	$scope.change=function(){
		$scope.enteredName=$scope.name;
		
	}
});