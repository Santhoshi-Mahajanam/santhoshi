var app=angular.module("stateProviderApp",["ui.router"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/");
$stateProvider
.state("home",{
	url:"/",
	templateUrl:"views/home.html",
	controller:"homeCtrl"
})
.state("bouquets",{
	url:"/bouquets",
	templateUrl:"views/bouquets.html",
	controller:"bouquetsCtrl"
})
.state("cartoons",{
	url:"/cartoons",
	templateUrl:"views/cartoons.html",
	controller:"cartoonsCtrl"
})
.state("home.jerry",{
	url:"/jerry",
	templateUrl:"assets/jerry.html"
})
.state("home.fish",{
	url:"/jerry",
	templateUrl:"assets/fish.html"
})
.state("home.noddy",{
	url:"/jerry",
	templateUrl:"assets/noddy.html"
})
.state("home.tweety",{
	url:"/jerry",
	templateUrl:"assets/tweety.html"
})
.state("home.oswald",{
	url:"/jerry",
	templateUrl:"assets/oswald.html"
})
}]);

app.controller("homeCtrl",function($scope){
	$scope.name="santhoshi";
});

app.controller("bouquetsCtrl",function($scope){
	$scope.bouquets="cartoons";
});

app.controller("cartoonsCtrl",function($scope){
	$scope.cartoons="cartoons1";
});

app.directive("navBarDirective",function(){
	return{
		restrict:"E",
		templateUrl:"views/directiveNav.html"
	}
});