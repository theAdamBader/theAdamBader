var heart; //creating an object to be called

function setup() {
	var newCanvas = createCanvas(400, 40);
	newCanvas.parent('p5js');

	heart = new Sprites();
	heart.set();
	background(0);
	noStroke();
}

function draw() {
    heart.run();
    fill(0, 10);
	rect(0, 0, width, height); 
	fill(random(255), random(255), random(255));
	ellipse(random(width), random(height), 5, 5);
}

// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   newCanvas.size(w,h);
//   width = w;
//   height = h;
// };