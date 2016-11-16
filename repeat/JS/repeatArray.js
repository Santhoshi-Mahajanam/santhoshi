$(document).ready(function(){
	//declaring global array
	var array=["santhu","latha","mani","varu"];
	//viewing array in dom
	$("#d").text(array);
setInterval(compare(),1000);
//on clicking button a prompt will appear through which we can store and  append input
	$(".buttonClick").click(function(){
		var input=prompt("enter any string");
		alert("do you really want to input data");
			if((input!=null)||(input!="")){
				array.push(input);
				compare();
	}
});

	//A function compares dom and array and appends elements into dom
	function compare(){
		var storeDom=$("#d").html();
		var storeDom1;
		console.log(array[2]);
		storeDom1=storeDom.split("<br>");
		console.log(storeDom1);
		for(var j=0;j<array.length;j++){
			array[0]=array[0].replace(array[0],"chinni");
			if(storeDom1[j]!=array[j]){
				$("#d").append("<br>"+array[j]+"<br>");
			}

		}
	}
	alert("checking");
	});
