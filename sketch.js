let x = 0
let bullet = [true];
let gamemode = 0;
let xPos = 0
let yPos = 730
let score = 0 
let bulletPos;
let xMove = 0
let enemies = true;                        
function preload(){
   player = loadImage("Images/player.jpg")
   textScreen = loadImage("Images/SpaceInvadersLogo.png")
   invader = loadImage("Images/invaders.jpg")
   invader2 = loadImage("Images/invaders2.jpg")
   invaders3 = loadImage ("Images/invaders3.jpg")
//    audio = loadSound("Images/shoot.wav")
}
function setup(){
   createCanvas(800,800);
   fill(0);
   rect(0,0,800,800);
   fill(0,255,0);
   rect(0,790,800,10)
   player = loadImage("Images/player.jpg")
   textScreen = loadImage("Images/SpaceInvadersLogo.png")
}
function draw(){
   if (gamemode ==0){
       image(textScreen, 0,0);
       fill("yellow");
       textSize(40)
       textAlign(CENTER)
       textFont("Khand")
       text("Press the Spacebar to play", 400,500)
   }
   if (gamemode ==1){
       fill(0)
       rect(0,0,800,800)
       fill(0,255,0);
       rect(0,790,800,10)
       fill(255)
       image(player,xPos,730,75,50)
       if (keyIsDown(LEFT_ARROW)){
           if(xPos>0){
               xPos -= 5
           }
       }else if (keyIsDown(RIGHT_ARROW)){
           if(xPos<730){
               xPos += 5
             }
    }else if(keyIsDown){
        
    }
        if(bullet[0]){
           rect(bulletPos+35,yPos,5,10)
           yPos -= 12
           if (yPos < 0){
               yPos = 730
               bullet[0] = false
           }
        }       if(enemies){
                for (i=0;i<10;i++){
                image(invaders3,x+xMove,60,50,50)
                image(invader2,x+xMove,120,55,55)
                image(invader2,x+xMove,180,55,55)
                image(invader2,x+xMove,240,55,55)
                image(invader,x+xMove,300,55,55)
                image(invader,x+xMove,360,55,55)
                x+=60
            }
            x=0
            xMove+=1
       }
            fill("white");   
            textFont("Rajdhani");    
            text("     Score : " + score,50,50);   
            textFont("Rajdhani");      
            text("Lives : <3  <3  <3",500,50) ;
    }     
}
function keyPressed(){
   if (gamemode == 0){
       if (key == " "){
           gamemode = 1           
       }
   }else if (gamemode == 1){
       if (key == " " && !bullet[0]){
           bullet[0] = true
           bulletPos = xPos       
        //    audio.play()    
       }  
   }
}