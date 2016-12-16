var app=angular.module("doubtsApp",[]);

app.controller("firstCtrl",function($scope){
  $scope.name="santhoshi";
  console.log($scope.age);
  $scope.clickFirst=function(){
    $scope.$broadcast("broadcastEvent",$scope.name);
  };
  $scope.$on("broadcastEvent",function(event,datab){
    $scope.broadcastData=datab;
  });
  $scope.$on("emitEvent",function(eventE,dataE){
    $scope.emitData=dataE;
      console.log($scope.emitData);
  });

});

app.controller("secondCtrl",function($scope){
  $scope.age=23;
  console.log($scope.name);
  $scope.$on("broadcastEvent",function(event,datab){
    $scope.broadcastData=datab;
    console.log($scope.broadcastData);
  });
  $scope.emit=function(){
    $scope.$emit("emitEvent",$scope.age);
  };
  $scope.$on("emitEvent",function(eventE,dataE){
    $scope.emitData=dataE;
  });
});
