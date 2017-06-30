function Sprites(){

var hearts = new Array(20);
var context = canvas.getContext("2d");
var currentImage = 0;
var frameStartTime = 0;
var x = 180;
var y = 10;

Sprites.prototype.set = function(){
	for(var i = 0; i < hearts.length; i++){
	    hearts[i] = loadImage("./img/assets/sprite/heart"+i+".png");
	}
}

Sprites.prototype.display = function() {
    context.clearRect(x, y, displayWidth, displayHeight);
    image(hearts[currentImage], x, y);
  }

Sprites.prototype.update = function() {

    if (millis() - frameStartTime > 100)
    {
       // reset the current frameStartTime to the current time
      frameStartTime = millis();
    
      currentImage ++;//increments the image by one every frame
      
      if (currentImage >= hearts.length)// when it reachs the end of the array, it goes back to 0
      {
        currentImage = 6;
      }
    }
  }

this.run = function(){//this function holds both display and update function
	this.display();
	this.update();
}

}