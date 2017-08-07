function setup(){
  createCanvas(1280, 720);
  background(53);
  var rain = [];
  for(int i=0; i<300; i++)
    rain[i] = new drop(random(1280), 0, 20, 50, 0, -40);
}

function draw(){
  fill(255);
  strokeWieght(3);
  for(int i=0; i<300; i++)
    rain[i].draw();
}

var drop = function(x, y, width, height, vilocityX, vilocityY){
  this.x = x;
  this.h = y;
  this.width = width;
  this.height = height;
  this.vilocityX = vilocityX;
  this.vilocityY = vilocityY;
  this.draw = function(){
    x += vilocityX;
    y += vilocityY;
    if(y<-720)this.y = 0;
    rect(x, y, width, height);
  }
}
