var survivalTime,score;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.x=ground.width/2
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivalTime=0
  score=0
  
}


function draw() {
background("white")
  
  stroke("black")
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  textSize(20)
  text("SurvivalTime:"+survivalTime,30,30)
  
  textSize(20)
  text("Score:"+score,300,30)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space") && monkey.y>=310){
    monkey.velocityY=-17
  }
  
  spawnFood();
  spawnObstacle();
  
  //if(monkey.isTouching(FoodGroup)){
 //   score=score+1
 //   FoodGroup.destroyEach();
 // }
  
  //if(monkey.isTouching(obstacleGroup)){
    
  //  FoodGroup.setLifetimeEach(-1);
  //  obstacleGroup.setLifetimeEach(-1);
    
   // FoodGroup.setVelocityXEach(0);
  //  obstacleGroup.setVelocityXEach(0);
 // }
  
  monkey.velocityY=monkey.velocityY+0.9
  
  monkey.collide(ground)
  
  drawSprites();  
}
function spawnFood(){
  if(frameCount % 70 === 0){
    banana=createSprite(400,130,30,30)
    banana.y=Math.round(random(150,150));
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=200;
    
    FoodGroup.add(banana)
  }
}
function spawnObstacle(){
  if(frameCount % 60 === 0){
    obstacle=createSprite(400,Math.round(random(320,320)),10,10)   
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacle.lifetime=200;
    
    obstacleGroup.add(obstacle)
  }
}





