//script for the blues

/* TODOS
*/

//VARS
var intenser = 6;
var	START_INTENSE = 0;
var	HOLE_INTENSE = 0;
var	END_INTENSE = 0;

var theBlues = [
	"#74e6e5",
	"#00bebe",
	"#006966"
]

//INITIALIZE
//if using jQuery:
$(document).ready(function(){
	var btn = document.getElementById("btn");
	btn.disabled = true;
});


//when clicking .starter images, add intensity up to 3
$(".starter").click(function(){
	if ($(this).attr("id") == "START_INTENSE" && START_INTENSE < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the starter", START_INTENSE, "times");
		$(this).css("background-color",theBlues[START_INTENSE]);
		START_INTENSE += 1;
		console.log("INTENSER:", intenser);
	} else if($(this).attr("id") == "HOLE_INTENSE" && HOLE_INTENSE < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the hole", HOLE_INTENSE, "times");
		$(this).css("background-color",theBlues[HOLE_INTENSE]);
		HOLE_INTENSE += 1;
		console.log("INTENSER:", intenser);
	} else if($(this).attr("id") == "END_INTENSE" && END_INTENSE < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the end", END_INTENSE, "times");
		$(this).css("background-color",theBlues[END_INTENSE]);
		END_INTENSE += 1;
		console.log("INTENSER:", intenser);
	} else {
		console.log("i'm sorry but you gotta quit");
	}
	if (intenser == 0) {
		btn.disabled = false;
	}
	document.getElementById("counter").textContent = intenser;
})

function startGenerator(START_INTENSE){
	switch(START_INTENSE) {
		case 1:
			console.log("the start intensity is", START_INTENSE);
			var start = document.createElement("img");
			start.src = "panels/start1.png";
			document.getElementById("startSection").appendChild(start);
			document.getElementById("startMonitor").textContent = START_INTENSE;
			break;
		case 2:
			console.log("the start intensity is", START_INTENSE);
			document.getElementById("startMonitor").textContent = START_INTENSE;
			break;
		case 3:
			console.log("the start intensity is", START_INTENSE);
			document.getElementById("startMonitor").textContent = START_INTENSE;
			break;
	}
}

function holeGenerator(HOLE_INTENSE){
	switch(HOLE_INTENSE) {
		case 1:
			console.log("the hole intensity is", HOLE_INTENSE);
			var hole = document.createElement("img");
			hole.src = "panels/hole1.png";
			document.getElementById("holeSection").appendChild(hole);
			document.getElementById("holeMonitor").textContent = HOLE_INTENSE;
			break;
		case 2:
			console.log("the hole intensity is", HOLE_INTENSE);
			document.getElementById("holeMonitor").textContent = HOLE_INTENSE;
			break;
		case 3:
			console.log("the hole intensity is", HOLE_INTENSE);
			var hole = document.createElement("img");
			hole.src = "panels/hole3.png";
			document.getElementById("holeSection").appendChild(hole);
			document.getElementById("holeMonitor").textContent = HOLE_INTENSE;
			break;
	}
}

function endGenerator(END_INTENSE){
	switch(END_INTENSE) {
		case 1:
			console.log("the end intensity is", END_INTENSE);
			var end = document.createElement("img");
			end.src = "panels/end1.png";
			document.getElementById("endSection").appendChild(end);
			document.getElementById("endMonitor").textContent = END_INTENSE;
			break;
		case 2:
			console.log("the end intensity is", END_INTENSE);
			document.getElementById("endMonitor").textContent = END_INTENSE;
			break;
		case 3:
			console.log("the end intensity is", END_INTENSE);
			document.getElementById("endMonitor").textContent = END_INTENSE;
			break;
	}
}

//depending on how intense the appropriate .starter was, generate a block of panels for each section

function comicGenerator(){
	startGenerator(START_INTENSE);

	holeGenerator(HOLE_INTENSE);

	endGenerator(END_INTENSE)
}







