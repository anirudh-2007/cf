var PLAY;
var END;
var gameState=PLAY;
var ball;
var redWall,blueWall,greenWall,yellowWall;
var gameSound;

function preload(){
  gameSound = loadSound("Game sound.m4a");
}


function setup(){
  createCanvas(800,600);
  ball=createSprite(400,50,30,30);
  ball.shapeColor="white";
  ball.velocityX=Math.round(random(5,25));
  ball.velocityY=Math.round(random(5,25));

  
    //create 4 different surfaces

    redWall=createSprite(100,570,170,30);
    redWall.shapeColor="red";

    blueWall=createSprite(300,570,170,30);
    blueWall.shapeColor="blue";

    greenWall=createSprite(500,570,170,30);
    greenWall.shapeColor="green";

    yellowWall=createSprite(700,570,170,30);
    yellowWall.shapeColor="yellow";
    //create box sprite and give velocity

}



function draw() {
    background("black");
   
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    /*ball.bounceOff(redWall);
    ball.bounceOff(blueWall);
    ball.bounceOff(yellowWall);*/
  
 
    gameSound.play();
    if(ball.isTouching(redWall)){
      ball.bounceOff(redWall)
      ball.shapeColor="red";
     
    }

    if(ball.isTouching(yellowWall)){
      ball.bounceOff(yellowWall)
      ball.shapeColor="yellow";
      
    }

    if(ball.isTouching(blueWall)){
      ball.bounceOff(blueWall)
      ball.shapeColor="blue";
     
    }
    
    if(greenWall.isTouching(ball)){
      ball.velocityX=0;
      ball.velocityY=0;
      ball.shapeColor="green";
      gameSound.stop();
  
    }
    
   
    drawSprites();
}
 