var fighter,fighterImg;
var image1,bridge;
var speedX = 20.5;
var speedY= 10.6;
var x = 300;
var y = 350;

var speedX1 = 2.5;
var speedY1= 1.6;
var x1 = 500;
var y1 = 500;

var gameState="waiting";

function preload()
{
//  fighterImg =createImg("fighter.gif");
fighterImg = loadAnimation("Capture7.PNG","Capture8.PNG","Capture9.PNG","Capture10.PNG")
image1 = loadAnimation("Capture24.PNG","Capture25.PNG","Capture26.PNG","Capture27.PNG")
image1_touch = loadAnimation("explode.png","explode2.png","explode3.png");
fighterImg2 = loadAnimation("Capture4.PNG","Capture5.PNG","Capture6.PNG")
image3 = loadImage("bg.png");
image4 = loadAnimation("Capture15.PNG");
don2= loadAnimation("6fBA.gif");
rope1=loadImage("rope.png")
}

function setup() 
{
 
   

   createCanvas(1400,700);

   fighter = createSprite(1000,200)
   fighter.addAnimation("xfty",fighterImg);
   fighter.addAnimation("kick",fighterImg2);
   fighter.addAnimation("d",image4);
   fighter.scale = 0.9;
   //fighter.debug=true;
   fighter.setCollider("rectangle",0,0,200,400);

   bridge = createSprite(800,300,10,700);
   bridge.addImage(rope1);
   //bridge.debug=true;
   bridge.setCollider("rectangle",0,0,50,800)
  

   BossGroup1=new Group();
   BossGroup2=new Group();
  

}

function draw()
 {
  background(0); 
  
 
  if(gameState==="waiting")
  {
    bridge.visible=false;
    textSize(30);
    fill("lightgreen");
    strokeWeight(2);
    stroke("red");
    text("Hero is here to save the world for you", 400,400);
    fill("cyan");
    strokeWeight(1);
    stroke("yellow");
    text("Press space key to start the game", 420,500);
    
    if(keyDown("Space"))
    {
      gameState="play";
    }
  }
  
  if(gameState==="play")
  {
  bossArmy();
  if(BossGroup1.collide(bridge))
  {
   // BossGroup1.setVelocityXEach(-1);
    BossGroup1.setVelocityYEach(2);
  }
//  fighterImg.position(900,40);
  edges = createEdgeSprites();
  fighter.bounceOff(edges);
 // BossGroup1.bounceOff(edges)
  //boss1.bounceOff(edges);
  if ( BossGroup1.isTouching(fighter)) 
  { 
    
    fighter.changeAnimation("kick",fighterImg2);
    boss1.changeAnimation("fire",image1_touch);
   // BossGroup1.removeSprites();
    
    // fighter.scale = 0.7
  } 
    if(keyWentUp("k") || !BossGroup1.isTouching(fighter))
    {
      fighter.changeAnimation("xfty",fighterImg);
     // 
      // fighter.scale = 0.7;
   }
   if(keyDown("j"))
   {
     fighter.velocityX = -6//jump
   }
   else if(keyDown("up"))
   {
     fighter.velocityY = -3
   }
   else if(keyDown("right"))
   {
     fighter.velocityX = 3
   }
   else if(keyDown("left"))
   {
     fighter.velocityX = -3
   }else{
     fighter.velocityY = 3
   }
  if(keyWentDown("down"))
   {
     fighter.changeAnimation("d",image4);
     BossGroup2.removeSprites();
   } 
   if(keyWentUp("down") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }
  bridge.visible=true;
  
  }
 
  drawSprites();
}

function bossArmy()
{
  /* var danger=Math.round(random(1))
  if(danger===1)
  { */
  if(frameCount%200===0)
  {
  //danger 1
  boss1 = createSprite(x,Math.round(random(200,400)),200,200);
  boss1.addAnimation("z",image1);
  boss1.addAnimation("fire",image1_touch);
  boss1.scale = 1.5;

  
  //random movement
  x = x + random(-speedX, speedX);
 // y = y + random(-speedY, -speedY);
  boss1.velocityX=10;

  //danger group 
  BossGroup1.add(boss1)
  }
  /*} else if(danger===2)
  {
    if(frameCount%500===0)
  {
  boss2 = createSprite(x1,y1,200,200);
  boss2.addAnimation("z",don2)
  boss2.scale = 1.5
  x1 = x1 + random(-speedX1, speedX1);
  y1 = y1 + random(-speedY1, -speedY1);
  boss2.velocityX=1;
  BossGroup2.add(boss2) */
  }

