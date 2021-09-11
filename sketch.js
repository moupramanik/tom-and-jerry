var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;
var garden,gardenImage;
function preload() {
 cat1=loadAnimation("images/cat1.png");
 cat2=loadAnimation("images/cat2.png","images/cat3.png");
 cat3=loadAnimation("images/cat4.png");
mouse1=loadAnimation("images/mouse1.png");
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3=loadAnimation("images/mouse4.png");
gardenImage=loadImage("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.scale=0.2;
cat.addAnimation("cats_sleeping",cat1);
mouse=createSprite(200,600);
mouse.addAnimation("mouse_sleeping",mouse1);
mouse.scale=0.1;
}

function draw() {

    background(gardenImage);
 
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catLastImage",cat3);
    cat.changeAnimation("catLastImage");
    cat.velocityX=0;
    mouse.addAnimation("mouseLastImage",mouse3);
    mouse.changeAnimation("mouseLastImage");
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat_running",cat2);
    cat.changeAnimation("cat_running");
    mouse.addAnimation("mouse_dancing",mouse2);
    mouse.changeAnimation("mouse_dancing");
}

}
