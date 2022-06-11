var bomb;
var coin;
var energydrink;
var path;
var power

var runner1,runner2;

function preload(){
  //pre-load images
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energydrinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  runner1Img = loadImage("Runner-1.png");
  runner2Img = loadImage("Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
 
}

function draw() {
  background(0);

}
