var app=angular.module("ajaxCallApp",[]);

app.controller("azaxCallCtrl",function($scope,$http){
  $http.get("js/ajaxJson.js")
 .success(function(data,status,headers,config){
    $scope.serverData=data.employeeDetails;
  })
  .error(function(data,status,headers,config){
    alert("sorry,there is some problem");
  })
});
