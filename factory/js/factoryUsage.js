var app=angular.module("factoryApp",[]);

app.controller("factoryCtrl",function($scope,factoryLessPromise){
	factoryLessPromise.getJsonData()
	.then(function(input){
		$scope.jsonData=input;
	},
	function(input){
		console.log("sorry");
	});
	});

app.factory("factoryLessPromise",function($http,$q){
	var factory={};
	var deferred=$q.defer();
	factory.getJsonData=function(){
		return $http.get("js/factoryData.json")
		.then(function(response){
			deferred.resolve(response.data.cartoons);
			console.log(response.data.cartoons);
			return deferred.promise;
		},
		function(response){
			deferred.reject(data);
			console.log("sorry");
			return deferred.promise;
		});
	}
	return factory;
	
});