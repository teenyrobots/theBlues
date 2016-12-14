//script for the blues

/* TODOS
[ ] make it so you have to click each one at least once
[ ] fix HOLE_INTENSE color changer to new var
*/

//VARS
var intenser = 6;
var	START_INTENSE = 0;
var	HOLE_INTENSE = 0;
var	END_INTENSE = 0;

var HOLE_INTENSE_CLICKER = 0;

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

//CHART STUFF
var testChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        display: false,
        scaleShowLabels : false,
        legend: {
			display: false
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem) {
					return tooltipItem.yLabel;
				}
			}
		},
		scales: {
			yAxes: [{
				display: false,          
				gridLines: {
					color: "rgba(0, 0, 0, 0)"
				}
			}],
			xAxes: [{
				display: false,
				gridLines: {
					color: "rgba(0, 0, 0, 0)"
				}   
			}]
		},
        elements: { 
        	point: { 
        		radius: 0 
        	} 
        }
    };

var storyData = [
  START_INTENSE, 
  HOLE_INTENSE, 
  END_INTENSE
];

var linectx = document.getElementById("testChart");

var myLineChart = new Chart(linectx, {
	type: 'line',
	data: {
		labels: [".",".","."],
		datasets: [{
			data: storyData,
			backgroundColor: [
				'rgba(116, 230, 229, 1)'
			],
			borderColor: [
				'rgba(0, 190, 190, 1)'
			],
			borderWidth: .5,
		}]
	},
	options: testChartOptions
});

//when clicking .starter images, add intensity up to 3
$(".playerInput img").click(function(){
	if ($(this).attr("id") == "START_INTENSE" && START_INTENSE < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the starter", START_INTENSE, "times");
		$(this).css("background-color",theBlues[START_INTENSE]);
		START_INTENSE += 1;
		console.log("INTENSER:", intenser);
		storyData[0] = START_INTENSE;
		myLineChart.update();
	} else if($(this).attr("id") == "HOLE_INTENSE" && HOLE_INTENSE_CLICKER < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the hole", HOLE_INTENSE_CLICKER, "times");
		$(this).css("background-color",theBlues[HOLE_INTENSE_CLICKER]);
		HOLE_INTENSE -= 1;
		HOLE_INTENSE_CLICKER += 1;
		console.log("INTENSER:", intenser);
		storyData[1] = HOLE_INTENSE;
		myLineChart.update();
	} else if($(this).attr("id") == "END_INTENSE" && END_INTENSE < 3 && intenser > 0){
		intenser -= 1;
		console.log("you clicked the end", END_INTENSE, "times");
		$(this).css("background-color",theBlues[END_INTENSE]);
		END_INTENSE += 1;
		console.log("INTENSER:", intenser);
		storyData[2] = END_INTENSE;
		myLineChart.update();
	} else {
		console.log("i'm sorry but you gotta quit");
	}
	if (intenser == 0) {
		btn.disabled = false;
	}
	document.getElementById("counter").textContent = intenser;
})

function startGenerator(START_INTENSE){
	var start = document.createElement("img");
	console.log("the start intensity is", START_INTENSE);
	switch(START_INTENSE) {
		case 1:
			start.src = "panels/s1.jpg";
			break;
		case 2:
			start.src = "panels/s2.jpg";
			break;
		case 3:
			start.src = "panels/s3.jpg";
			break;
	}
	document.getElementById("startSection").appendChild(start);
//	document.getElementById("startMonitor").textContent = START_INTENSE;
}

function holeGenerator(HOLE_INTENSE){
	var hole = document.createElement("img");
	console.log("the hole intensity is", HOLE_INTENSE);
	switch(HOLE_INTENSE) {
		case -1:
			hole.src = "panels/h1.jpg";
			break;
		case -2:
			hole.src = "panels/h2.jpg";
			break;
		case -3:
			hole.src = "panels/h3.jpg";
			break;
	}
	document.getElementById("holeSection").appendChild(hole);
//	document.getElementById("holeMonitor").textContent = HOLE_INTENSE;
}

function endGenerator(END_INTENSE){
	console.log("the end intensity is", END_INTENSE);
	var end = document.createElement("img");
	switch(END_INTENSE) {
		case 1:
			end.src = "panels/e1.jpg";
			break;
		case 2:
			end.src = "panels/e2.jpg";
			break;
		case 3:
			end.src = "panels/e3.jpg";
			break;
	}
	document.getElementById("endSection").appendChild(end);
//	document.getElementById("endMonitor").textContent = END_INTENSE;
}

//depending on how intense the appropriate .starter was, generate a block of panels for each section

function reloadComic(){
	window.location.reload();
	scroll(0,0);
}

function comicGenerator(){
	startGenerator(START_INTENSE);
	holeGenerator(HOLE_INTENSE);
	endGenerator(END_INTENSE);

	document.getElementById("startSection").scrollIntoView();

	btn.disabled = true;
	var playAgain = document.createElement("img");
	playAgain.src = "panels/playAgain.jpg";
	document.getElementById("playAgain").appendChild(playAgain);
	playAgain.onclick = reloadComic;
}










