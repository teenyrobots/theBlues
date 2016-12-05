//script for the blues

/* TODOS
*/

//VARS
var intenser = 6;
var	START_INTENSE = 0;
var	HOLE_INTENSE = 0;
var	END_INTENSE = 0;


//INITIALIZE
//if using jQuery:
$(document).ready(function(){
	
});


//when clicking .starter images, add intensity up to 3
$(".starter").click(function(){
	if ($(this).attr("id") == "START_INTENSE" && START_INTENSE < 3 && intenser > 0){
		START_INTENSE += 1;
		intenser -= 1;
		console.log("you clicked the starter", START_INTENSE, "times");
		console.log("INTENSER:", intenser);
	} else if($(this).attr("id") == "HOLE_INTENSE" && HOLE_INTENSE < 3 && intenser > 0){
		HOLE_INTENSE += 1;
		intenser -= 1;
		console.log("you clicked the hole", HOLE_INTENSE, "times");
		console.log("INTENSER:", intenser);
	} else if($(this).attr("id") == "END_INTENSE" && END_INTENSE < 3 && intenser > 0){
		END_INTENSE += 1;
		intenser -= 1;
		console.log("you clicked the end", END_INTENSE, "times");
		console.log("INTENSER:", intenser);
	} else {
		console.log("i'm sorry but you gotta quit");
	}

		
		
	
})

//depending on how intense the appropriate .starter was, generate a block of panels for each section