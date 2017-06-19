function Sprites(){

var ranger = new Array(3);
var ranger1 = new Array(2);
var context = canvas.getContext("2d");
var currentImage = 0;
var frameStartTime = 0;
var x = 32;
var x1 = 382;
var y = 140;

Sprites.prototype.set = function(){
	for(var i = 0; i < ranger.length; i++){
	    ranger[i] = loadImage("./img/assets/ranger/attack"+i+".png");
	}
  for(var i = 0; i < ranger1.length; i++){
      ranger1[i] = loadImage("./img/assets/ranger/idle"+i+".png");
  }
}

Sprites.prototype.display = function() {
    context.clearRect(x, y, displayWidth, displayHeight);
    //context.clearRect(x + 350, y, 32, 32);
    image(ranger[currentImage], x, y);
    image(ranger1[currentImage], x1, y);
  }

Sprites.prototype.update = function() {

    if (millis() - frameStartTime > 100)
    {
       // reset the current frameStartTime to the current time
      frameStartTime = millis();
    
      currentImage ++;//increments the image by one every frame
      
      if (currentImage >= ranger.length || currentImage >= ranger1.length )// when it reachs the end of the array, it goes back to 0
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