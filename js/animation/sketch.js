// var heart; //creating an object to be called

var newCanvas;

function setup() {
	newCanvas = createCanvas(window.innerWidth/4.5, window.innerHeight/4);
	newCanvas.parent('p5js');
	// heart = new Sprites();
	// heart.set();
	background(0);
	noStroke();
}

function draw() {
    // heart.run();
    fill(0, 10);
	rect(0, 0, width, height); fill(random(255), random(255), random(255));
	ellipse(random(width), random(height), 5, 5);
}

// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   newCanvas.size(w,h);
//   width = w;
//   height = h;
// };