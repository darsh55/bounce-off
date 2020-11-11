var frect,mrect;

function setup() {
  createCanvas(400,400);
  frect= createSprite(10, 200, 50, 50);
  mrect = createSprite(380,200,20,50);
  frect.shapeColor = "green";
  mrect.shapeColor = "green";
  mrect.velocityX=-2;
  mrect.velocityY=0;
  frect.velocityX=2;
  frect.velocityY=0;
}
 
function draw() {
  background("pink"); 
 // mrect.x= mouseX;
 // mrect.y = mouseY;
if ((mrect.x - frect.x < frect.width/2+ mrect.width/2)&&
(mrect.y-frect.y< frect.height/2 +mrect.height/2)
&&(frect.y-mrect.y< frect.height/2 +mrect.height/2)
&&(frect.x-mrect.x< frect.width/2+mrect.width/2)
)
  {
  frect.shapeColor = "red";
  mrect.shapeColor = "red";
}
else
{3
  frect.shapeColor = "green";
  mrect.shapeColor = "green";
}
if(mrect.x - frect.x < frect.width/2+ mrect.width/2){
 mrect.velocityX=mrect.velocityX * (-1);
 frect.velocityX=frect.velocityX * (-1);
}

  drawSprites();
}