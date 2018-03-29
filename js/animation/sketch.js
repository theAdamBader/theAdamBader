var names; //creating an object to be called


function setup() {
	var newCanvas = createCanvas(windowWidth, windowHeight);
	newCanvas.parent('p5js');

	names = new Sprite();
	names.set();

}

function draw() {
    names.run();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
