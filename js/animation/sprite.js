function Sprites(){

var rainbows = new Array(40);
var context = canvas.getContext("2d");
var currentImage = 0;
var frameStartTime = 0;
var x = 0;
var y = 0;

Sprites.prototype.set = function(){
	for(var i = 0; i < rainbows.length; i++){
	    rainbows[i] = loadImage("./img/assets/sprites/rainbow"+i+".png");
	}
}

Sprites.prototype.display = function() {
    context.clearRect(x, y, displayWidth, displayHeight);
    image(rainbows[currentImage], x, y);
  }

Sprites.prototype.update = function() {

    if (millis() - frameStartTime > 100)
    {
       // reset the current frameStartTime to the current time
      frameStartTime = millis();
    
      currentImage ++;//increments the image by one every frame
      
      if (currentImage >= rainbows.length)// when it reachs the end of the array, it goes back to 0
      {
        currentImage = 39;
      }
    }
  }

this.run = function(){//this function holds both display and update function
	this.display();
	this.update();
}

}