var ranger1; //creating an object to be called

function setup() {
	var newCanvas = createCanvas(64, 64);
	newCanvas.parent('p5js');
	//newCanvas.position(0, 0);
	ranger1 = new Sprites();
	ranger1.set();
}

function draw() {
    ranger1.run();
}

