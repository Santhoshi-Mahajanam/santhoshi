$(document).ready(function(){
  $.getJSON("./JS/json.js", function(result){
            $.each(result.employeeDetails, function(i, field){
                $("#rowData1").append(result.employeeDetails[i].empNum + "<br> ");
                $("#rowData2").append(result.employeeDetails[i].empName + "<br> ");
                $("#rowData3").append(result.employeeDetails[i].empExp + "<br> ");
                $("#rowData4").append(result.employeeDetails[i].empDes+ "<br> ");
                $("#rowData5").append(result.employeeDetails[i].mobileNum + "<br> ");
            });
          });
});
