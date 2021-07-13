var bg ,formbgimg ;
var form;
var form2;
var gameState="form";
var button,buttonImg;
var rulesbgimg;
var Space, spaceImg;
var Submarine,subImg;
var PLAYbg,PLAYbgImg;
var corner,cornerImg;

function preload(){
formbgimg=loadAnimation("images/background.png","images/bg 2.png","images/background.png")
buttonImg=loadImage("images/start.jpeg");
rulesbgimg=loadImage("images/light bg.png");
spaceImg=loadImage("images/space.png");
subImg=loadImage("images/ship3.png");
cornerImg=loadImage("images/61.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    bg=createSprite(windowWidth/2,windowHeight/2,30,30);
    
    Submarine=createSprite(windowWidth/2,windowHeight/2)
    Submarine.addImage(subImg);
    Submarine.visible=false;
    Submarine.scale=0.3;

    Space=createSprite(windowWidth/2+280,630);
    Space.addImage(spaceImg);
    Space.scale=0.2;
    Space.visible=false;
    
    button=createSprite(windowWidth/2+50,240);
    button.addImage(buttonImg);

     corner=createSprite(windowWidth/2+50,240)
     corner.addImage(cornerImg);
     corner.visible=false;
     corner.scale=0.5;


    button.scale=0.4;
    form=new Form();
    form.display();
    
   

}

function draw(){
    
   // background(bgimg);
   if(gameState=="form"){
    form.display();
    bg.addAnimation("bg",formbgimg);
    bg.scale=0.7;

    if(mousePressedOver(button)){
        gameState="rules";
        
    }

   
   }
   

   if(gameState=="rules"){
       background(rulesbgimg);
       form.hide();
       bg.visible=false;
       button.visible=false;

       textSize(50);
       fill("darkblue");
       text("WELCOME",windowWidth/2-140,70);

       textSize(30);
       fill("oliveblue");
       text("This Game is Created by Khushi And Sneha",windowWidth/2-250,150);

       textSize(50);
       fill("darkblue");
       text("RULES",windowWidth/2-95,250);

       textSize(30);
       fill("oliveblue");
       text("1.] To Move The Submarine, You Need To Use The Arrow Keys ↑ ↓ → ← ",windowWidth/2-350,350);

       textSize(30);
       fill("darkblue");
       text("2.] To Win The Level, Conqure The Mariana Trench ",windowWidth/2-350,450);

       textSize(30);
       fill("oliveblue");
       text("3.] If You Touch Any Sea Animals You Lose ",windowWidth/2-350,550);


       textSize(50);
       fill("black");
       text("Press Space Bar To Start  ",windowWidth/2-350,650);
         
       Space.visible= true;
       
       if(keyDown("space")){
           gameState="PLAY";
       }
       
       //form2.display();
   }

   if(gameState=="PLAY"){
       background(rulesbgimg);
       Space.visible=false;
       Submarine.visible=true;
       corner.visible=true;
       if(keyDown("up")){
           Submarine.y-=4;

       }
       if(keyDown("down")){
        Submarine.y+=4;

    }
   }
  
   drawSprites();
}