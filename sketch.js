var mr,fr,one,two;
function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor="green";
  mr.debug = true;

  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor="green";
  fr.debug = true;
  
  one = createSprite(700, 100, 50, 50);
  one.shapeColor="green";
  one.debug = true;
  one.velocityX = -3;

  two = createSprite(100, 100, 50, 50);
  two.shapeColor="green";
  two.debug = true;
  two.velocityX = 3;
}

function draw() {
  background(0); 
  mr.x = World.mouseX; 
  mr.y = World.mouseY;

  if(mr.x-fr.x < fr.width/2 + mr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2 && mr.y - fr.y < mr.height/2 + mr.height/2 && fr.y - mr.y < fr.height/2 + mr.height/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }

  if(one.x-two.x < two.width/2 + one.width/2 && two.x - one.x < two.width/2 + one.width/2){
    //one.velocityX=one.velocityX*(-1);
    //two.velocityX=two.velocityX*(-1);
    one.velocityX *= (-1);
    two.velocityX *= (-1);
  }

  if(one.y - two.y < two.height/2 + one.height/2 && two.y - one.y < two.height/2 + one.height/2){
    one.velocityY *= (-1);
    two.velocityY *= (-1);
  }

  drawSprites();
}