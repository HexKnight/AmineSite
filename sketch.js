function drop(x, y, width, height, vilocityX, vilocityY){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.vilocityX = vilocityX;
  this.vilocityY = vilocityY;
}

drop.prototype.draw = function(){
    this.x += this.vilocityX;
    this.y += this.vilocityY;
    if(this.y > 720)this.y = 0;
    rect(this.x, this.y, this.width, this.height);
  }

var rain = [];

function setup(){
  createCanvas(1280, 720);
  for(var i=0; i<300; i++)
    rain[i] = new drop(random(1280), 0, 15, 40, 0, random(30)+20);
}

function draw(){
  background(53);
  fill(255);
  for(var i=0; i<300; i++)
    rain[i].draw();
}
