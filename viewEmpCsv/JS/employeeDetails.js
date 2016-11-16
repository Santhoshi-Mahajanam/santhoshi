
//Employee angular application is intialised here

var app=angular.module("empApp",[]);

//directive reads the file data
app.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        console.log(typeof reader);
			});
		}
	};
});
//below controller add employee details into array,remove employee details,edits employee details,converts json file into csv
app.controller("storingEmpDetCtrl",function($scope){
		
		$scope.Empdatabase=[];
		$scope.empName="";
		$scope.empNum="";
		$scope.empDesignation="";
		$scope.experience="";
		//below storeDetails function stores employee details in array
		$scope.storeDetails=function(){
		var flag=false;
		var empFlag=false;
		var empObj={};
		empObj.empName=$scope.empName;
		empObj.empNum=$scope.empNum;
		empObj.empDesignation=$scope.empDesignation;
		empObj.experience=$scope.experience;
		console.log(empObj);
		for(var empArray=0;empArray<$scope.Empdatabase.length;empArray++){
			console.log("for");
			if($scope.empName=="" || $scope.empNum=="" || $scope.empDesignation=="" || $scope.experience==""){
				flag=true;
				if($scope.empNum==$scope.Empdatabase[empArray].empNum){
					empFlag=true;
					
				}
			}
		}
		if(flag==true){
			alert("sorry,enter all compulsory fields");
		}
		else{
			if(empFlag==true){
				alert("your details already existed");
			}
			else{
				$scope.Empdatabase.push(empObj);
				console.log($scope.Empdatabase);
				alert("details successrfully inserted");
			}
		}
	}
	//below scope is used to shows employee details in view
	$scope.view=$scope.Empdatabase;
	console.log($scope.view);
	//below delete takes employee array as input and removes particular employee details whenever clicks delete
	$scope.delete=function(emp){
		for(var i=0;i<$scope.Empdatabase.length;i++){
			if(emp.empNum==$scope.Empdatabase.empNum){
				var index=$scope.Empdatabase.indexOf(emp);
				$scope.Empdatabase.splice(index,1);
			}
		}
		
	}
	//edit function also takes employee array as input and modifies the details and update those details in array
	$scope.edit=function(emp){
		$scope.display=false;
		$scope.empName=emp.empName;
		$scope.empNum=emp.empNum;
		$scope.empDesignation=emp.empDesignation;
		$scope.experience=emp.experience;
		//below function updates the modified result
		$scope.update=function(){
			for(var arr=0;arr<$scope.Empdatabase.length;arr++){
				if(emp.empNum==$scope.Empdatabase[arr].empNum){
					$scope.Empdatabase[arr].empName=$scope.empName;
					$scope.Empdatabase[arr].empNum=$scope.empNum;
					$scope.Empdatabase[arr].empDesignation=$scope.empDesignation;
					$scope.Empdatabase[arr].experience=$scope.experience;
					
				}
			}
			$scope.display=true;
		}
	
		$scope.display=true;
	}
	//this converts json to csv file
	$scope.convertCsv=function(){
		var database=$scope.Empdatabase;
		DownloadJSON2CSV(database);

		function DownloadJSON2CSV(objArray)
		{
			var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

			var str = '';

			for (var i = 0; i < array.length; i++) {
				var line = '';

				for (var index in array[i]) {
					line += array[i][index] + ',';
				}

				

				str += line + '\r\n';
			}
			var fileName = "MyReport_";
		  
			var uri= "data:attachment/csv;charset=utf-8," + escape(str);
			var link = document.createElement("a");    
			link.href = uri;
			
			link.style = "visibility:hidden";
			link.download = fileName + ".csv";
			link.click();
		}
		
	}
	
	
});
//controller which shows file content in view
app.controller("MainCtrl",function($scope,myservice){
	$scope.showContent = function($fileContent){
	   $scope.content = myservice.import($fileContent);
		
	};
});
//service converts csv file into json format and returns that result
app.service("myservice",function() {
	this.import=  function($fileContent)
	{
		var csv = $fileContent;	
		var lines=csv.split("\n");
		var result = [];
		var headers=lines[0].split(",");
		for(var i=1;i<lines.length;i++)
		{
			var obj = {};
			var currentline=lines[i].split(",");
			for(var j=0;j<headers.length;j++)
			{
			  obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}
		  
		  return result; 
	};
	
});

	






