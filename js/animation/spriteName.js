function Sprite(){

var names = new Array(58);
var context = canvas.getContext("2d");
var currentImage = 0;
var frameStartTime = 0;
var x = 50;
var y = 0;

Sprite.prototype.set = function(){
	for(var i = 0; i < names.length; i++){
	    names[i] = loadImage("./img/assets/nameSprites/name"+i+".png");
	}
}

Sprite.prototype.display = function() {
    context.clearRect(x, y, displayWidth, displayHeight);
    image(names[currentImage], x, y);
  }

Sprite.prototype.update = function() {

    if (millis() - frameStartTime > 100)
    {
       // reset the current frameStartTime to the current time
      frameStartTime = millis();
    
      currentImage ++;//increments the image by one every frame
      
      if (currentImage >= names.length)// when it reachs the end of the array, it goes back to 0
      {
        currentImage = 55;
      }
    }
  }

this.run = function(){//this function holds both display and update function
	this.display();
	this.update();
}

}