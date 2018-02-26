 var pingGeneratedArrays= function(userInput) {
	var resultOfArray = [];
	//for loop
	for(var i = 1; i <= userInput; i += 1) {
		if(((i % 3) === 0) && ((i % 5) === 0)) {
			resultOfArray.push("pingpong");
		} else if ((i % 3) === 0) {
			resultOfArray.push("ping");
		} else if ((i % 5) === 0) {
			resultOfArray.push("pong");
		} else {
			resultOfArray.push(i);
		}
	}
	return resultOfArray;
}

// jquery 
$(document).ready(function() {
	
$("#myform-item2").click(function(event) {
		event.preventDefault();
		//get input from user
		var userInput = parseInt($("#myform-item1").val());
		$("#append-list-arrays").empty();
		var resultOfArray = pingGeneratedArrays(userInput);
  	$("#append-list-arrays").append('<li>' + resultOfArray[i]+'</li>');
  });
});







