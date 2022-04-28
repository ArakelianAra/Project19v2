var soccerplayer,soccerplayerImg
var soccerpitch,soccerpitchImg
var ball,ballImg
var gamestate="play"
var score
//var END
function preload(){
  soccerplayerImg=loadImage("Images/Soccer player.png")
  ballImg=loadImage("Images/Soccer ball.png")
  soccerpitchImg=loadImage("Images/Soccer field background.jpg")
}



function setup() {
  createCanvas(600,800);
  
  soccerpitch=createSprite(300,300,width,height)
  soccerpitch.addImage(soccerpitchImg)
  soccerplayer=createSprite(100,200,5,5)
  soccerplayer.addImage(soccerplayerImg)
  soccerplayer.scale=0.3
  soccerpitch.velocityX=-1
 ballGroup=new Group 
//score = score + Math.round(getFrameRate()/50);
   
  
}

function draw() {
  background(255,255,255);  
  //score=score+1
  text("score: "+ score,900,30);
  if (gamestate==="play"){
    soccerplayer.y=World.mouseY
    //Infinite world
    if(soccerpitch.x<200){
      soccerpitch.x=400
      soccerplayer.setCollider("circle",0,0,45)
      //soccerplayer.debug=true
     
    }
    
    score = score + 1
      Spawnballs()
      if(soccerplayer.isTouching(ballGroup)){
        gamestate="end"
      }

   //if(gammestate)
    drawSprites();
  }
  else{
    console.log("gameend")
    background(0)
    textSize(50)
    text("Game Over",200,400)
   
  }
  console.log (score)
  
}
  
  function Spawnballs(){
    if(frameCount%180===0){
      var ball=createSprite(810,random(100,700))
      ball.addImage(ballImg)
      ball.velocityX=-4
      ballGroup.add(ball);
      ball.scale=0.1
  }







}
  
 
  




