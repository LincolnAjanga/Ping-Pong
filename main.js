// Backend Logic for the ping pong game

//   var pingGenerated = function(userInput) {
// 	var arrayResult = [];
// 	//for loop
// 	for(var i = 1; i <= userInput; i ++ ) {
// 		if(((i % 3) === 0) && ((i % 5) === 0)) {
// 			arrayResult.push("pingpong");
// 		} else if ((i % 3) === 0) {
// 			arrayResult.push("ping");
// 		} else if ((i % 5) === 0) {
// 			arrayResult.push("pong");
// 		} else {
// 			arrayResult.push(i);
// 		}
// 	}
// 	return arrayResult;
// }

// console.log(pingGenerated);





var pingPong = function pingPongGenerator(userInput){

var arrayResult = [];

for (var i = 1; i <= userInput; i++){
 if(i % 3===0)
 	arrayResult.push('ping');
 }
 else if (i % 5===0){
 	arrayResult.push('pong');
 }
 else if(i % 3===0) && (i % 5===0){
 	arrayResult.push('ping pong');
 }
 else{
 	arrayResult.push(i);
 }
}

return arrayResult;
}

//User interface logic

//jquery 
$(document).ready(function() {
	$('#onClick').click(function(event) {
		event.preventDefault();

		//get user input
		var userInput = parseInt($("submit").val());
        $("#append-list-arrays").empty();
		var arrayResult = pingPong(userInput);
  		$("#append-list-arrays").text(arrayResult);
  });
	});
	



