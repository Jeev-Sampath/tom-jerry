var gardenImg, garden;
var tom, tomImg, tomImg2, tomImg3, tomImg4;
var jerry, jerryImg, jerryImg2, jerryImg3,jerryImg4;
function preload() {
    //load the images here
    gardenImg = loadAnimation("images/garden.png");
    tomImg = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg = loadImage("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,1000,800);
    garden.shapeColor = "green";
    garden.addAnimation("garden",gardenImg);

    //create tom and jerry sprites here
    tom = createSprite(700,600,50,50);
    tom.scale = 0.1;
    //tom.shapeColor = rbg(158, 158, 158);
    tom.addAnimation("tom",tomImg);

    jerry = createSprite(300,600,50,50);
    jerry.scale = 0.1;
    //jerry.shapeColor = rgb(110, 59, 20);
    jerry.addAnimation("jerry",jerryImg);
    jerry.debug = true;
    tom.debug = true;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    //stroke("red");
    //fill("red");
    //textSize(30);
    //textAlign(CENTER);
    //text("If I tried adding images to the sprites the 200 Ok would not load",500,200);
    //text("I have written the code for the animations but I have commented them",500,250);
    //text("because I wasn't able to run the code with them there",500,300);
    keyPressed();

    if (tom.x - jerry.x < jerry.width/2 + tom.width/2 
        && jerry.x - tom.x < jerry.width/2 + tom.width/2
        && tom.y - jerry.y < jerry.height/2 + tom.height/2 
        && jerry.y - tom.y < jerry.height/2 + tom.height/2){
            tom.addAnimation("tom4",tomImg3);
            tom.changeAnimation("tom4");

            jerry.addAnimation("jerry4",jerryImg3)
            jerry.changeAnimation("jerry4");
            tom.velocityX = 0;
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    tom.addAnimation("tomRunning",tomImg2)
    tom.changeAnimation("tomRunning");
    tom.velocityX = -2;

    jerry.addAnimation("jerryLaughing",jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryLaughing");
} else {
    tom.changeAnimation("tom");
    tom.velocityX = 0;
}

}

