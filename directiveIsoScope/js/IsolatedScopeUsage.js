var app=angular.module("isolatedApp",[]);

app.controller("isolatedScopeCtrl1",function($scope,getJsonService1){
    $scope.dataFromService =[];
  getJsonService1.getJsonData(function(param){
      $scope.dataFromService = param;
        console.log($scope.dataFromService);
  });

  $scope.Button = function(index){
    console.log(index);
    $scope.dataFromService.splice(index,1);
  }

});

app.controller("isolatedScopeCtrl2",function($scope,getJsonService1){
  getJsonService1.getJsonData2(function(param){
    $scope.dataFromService=param;
    console.log($scope.dataFromService);
  });
  $scope.Button = function(index){
    console.log(index);
    $scope.dataFromService.splice(index,1);
  }
});


app.service("getJsonService1",function($http){
  this.getJsonData=function(callBack){
    $http.get("js/jsonData.js")
    .success(function(data,status,headers,config){
      console.log(data.employeeDetails);
      callBack(data.employeeDetails);
    })
    .error(function(data,status,headers,config){
      alert("sorry");
    })
  }
  this.getJsonData2=function(callBack){
    $http.get("js/jsonData2.js")
    .success(function(data,status,headers,config){
      callBack(data.employeeDetails);
    })
    .error(function(data,status,headers,config){
      alert("sorry,server failed to respond");
    });
  }

});



app.directive("firstDirective",function(){
  return{
    restrict:"E",
    scope:{
      data:"=",
      delete:"&"
    },
    templateUrl:"view/directiveDelete.html",
    link:function(scope){
  console.log(scope.data)  ;
    }

  }
});
