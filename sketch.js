
const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

var engine, world, object, ground, ball;
var w, h;
var fairyImg,startImg,bgImg
function preload(){
fairyImg=loadImage("images/fairy1.png");
starImg=loadImage("images/star.png");
bgImg=loadImage("images/starnight.png");
joyMusic=loadSound("sound/JoyMusic.mp3")
}
function setup() {
  createCanvas(600,600);
  

  engine = Engine.create();
  world = engine.world;

  w=300;
  h=300

var options= {
  isStatic:true,
  restitution:1
}

  fairy=Bodies.rectangle(80,500,w/2,h/2,options);
//   fairy=Body.rectangle(80,500,w/2,h/2,options);
//   fairy=Bodies.rectangles(80,500,w/2,h/2,options);
//   fairy=Bodies.rectanglular(80,500,w/2,h/2,options);
  World.add(world,fairy); 

  var starOptions= {
    isStatic:true,
    restitution:0
  }
  star=Bodies.circle(400,10,10,starOptions);  
//   star=Body.circle(400,10,10,starOptions);  
//   star=Bodies.circles(400,10,10,starOptions);  
//   star=Body.circles(400,10,10,starOptions);
  
  World.add(world,star);

}

function draw() {
  background(bgImg); 

  Engine.update(engine);

  if(keyIsDown(RIGHT_ARROW)){
    fairy.position.x +=5
  }
  if(keyIsDown(LEFT_ARROW)){
    fairy.position.x -=5
  }

  if(keyIsDown(DOWN_ARROW)){
    Body.setStatic(star,false);
    joyMusic.play()
  }
  if(star.position.y>460){
    Body.setStatic(star,true);
    joyMusic.stop();
  }
  
  imageMode(CENTER)
  image(fairyImg,fairy.position.x, fairy.position.y, w, h) ;
  
  image(starImg,star.position.x, star.position.y,40,40);
  text(mouseX+","+mouseY,mouseX,mouseY)
}
