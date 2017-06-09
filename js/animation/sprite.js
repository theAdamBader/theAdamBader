function Sprites(){

var ranger = new Array(3);
var context = canvas.getContext("2d");
var currentImage = 0;
var frameStartTime = 0;
var x = 0;
var y = 32;

Sprites.prototype.set = function(){
	for(var i = 0; i < ranger.length; i++){
	    ranger[i] = loadImage("./img/assets/ranger/attack"+i+".png");
	}
}

Sprites.prototype.display = function() {
    context.clearRect(x, y, 32, 32);
    image(ranger[currentImage], x, y);
  }

Sprites.prototype.update = function() {

    if (millis() - frameStartTime > 100)
    {
       // reset the current frameStartTime to the current time
      frameStartTime = millis();
    
      currentImage ++;//increments the image by one every frame
      
      if (currentImage >= ranger.length)// when it reachs the end of the array, it goes back to 0
      {
        currentImage = 0;
      }
    }
  }

this.run = function(){//this function holds both display and update function
	this.display();
	this.update();
}

}