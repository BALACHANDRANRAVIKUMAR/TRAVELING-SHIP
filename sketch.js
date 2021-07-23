var sea,seaimg
var ship,shipimg

function preload()
{
seaimg=loadImage("sea.png")
shipimg=loadImage("ship-1.png")
}

function setup(){
  createCanvas(1600,800);
  sea=createSprite(200,200)
  sea.addImage(seaimg)
  sea.scale=0.8
ship=createSprite(800,400);
ship.addImage(shipimg)
ship.scale=0.6
 ship.velocityX=3
 
}

function draw() {
  background("blue");

  if (ship.x>1600)
  {

    ship.x=0
  }
 drawSprites()
}