var ranger1; //creating an object to be called
var x = 550;
var y = 200;

function setup() {
	var newCanvas = createCanvas(displayWidth, displayHeight);
	newCanvas.parent('p5js');
	//newCanvas.position(x, y);
	ranger1 = new Sprites();
	ranger1.set();
}

function draw() {
    ranger1.run();
}

