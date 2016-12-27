var app=angular.module("responsiveGoogleMap",["ngMap"]);
//the below directive contains logo,searchbox and some icons
app.directive("logoBar",function(){
	return{
		restrict:"EA",
		templateUrl:"../view/logoBar.html"
	}
});
//the below directive used to view navbar with three icons and one data in view
app.directive("directiveForNavbar",function(){
	return{
		restrict:"EA",
		templateUrl:"../view/navbar.html"
	}
});
//this directive is used to represent map details in view
app.directive("showMapData",function(){
	return{
		restrict:"E",
		templateUrl:"../view/showMapRelatedDetails.html"
	}
});

// app.controller("showSelectedAreaDetails",function($scope,returnSelectedAreaDetails){
// 	returnSelectedAreaDetails.getDetailsFromJson("../js/selectedAreaDetails.json")
// 	.then(function(inputFromService){
// 		$scope.storeSelectedDetails=inputFromService;
//     console.log($scope.storeSelectedDetails);
// 	},function(inputFromService){
// 		alert("sorry,server not responding correctly");
// 	});
// });

// app.service("returnSelectedAreaDetails",function($http,$q){
// 	this.getDetailsFromJson=function(){
// 		var deferedObj=$q.defer();
// 		$http.get()
// 		.then(function(response){
// 			deferedObj.resolve(response.data);
// 			return deferedObj.promise;
// 		},function(response){
// 			deferedObj.reject(response);
// 			return deferedObj.promise;
// 		});
// 	};
// });
