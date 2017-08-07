function setup(){
  createCanvas(1280, 720);
  background(53);
  var rain = [];
  for(int i=0; i<300; i++)
    rain[i] = new drop(random(width), 0, 20, 50, 0, -40);
}

function draw(){
  fill(200, 0, 0);
  ellipse(width/2, height/2, 100, 100);
  
}

var drop = function(x, y, width, height, vilocityX, vilocityY){
  this.x = x;
  this.h = y;
  this.width = width;
  this.height = height;
  this.vilocityX = vilocityX;
  this.vilocityY = vilocityY;
}
