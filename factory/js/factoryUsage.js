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

app.controller("loopServiceCtrl",function($scope,loopPromiseService,$q){

	var loop1;
	var loop2;
	loop1=loopPromiseService.promise1("js/serviceData.json");
	
	loop2=loopPromiseService.promise1("js/factoryData.json");
	
	$q.all([loop1,loop2]).then(function(response){
		$scope.data1=response[0];
		console.log($scope.data1)
		$scope.data2=response[1];
	});

});

app.factory("factoryLessPromise",function($http,$q){
	var factory={};
	var deferred=$q.defer();
	factory.getJsonData=function(){
		return $http.get("js/factoryData.json")
		.then(function(response){
			deferred.resolve(response.data.cartoons);
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

app.service("loopPromiseService",function($http,$q){
	var defer1=$q.defer();
	this.promise1=function(arrayLoop){
		return $http.get(arrayLoop)
		.then(function(response){
			defer1.resolve(response.data);
			console.log(response.data);
			return defer1.promise;
		},function(response){
			defer1.reject(data);
			return defer1.promise;
		});
	};
})