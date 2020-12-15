

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var background_img;
var log,platform;
var slingshot;
var gamestate = 0;
var score = 0;
var birds = [];
var bird_flying, bird_select, pig_snort;


function preload(){
  date_time();
  bird_select = loadSound("images/bird_select.mp3");
  bird_flying = loadSound("images/bird_flying.mp3");
  pig_snort = loadSound("images/pig_snort.mp3");
}

function setup() {
  createCanvas(1200,800);
  engine= Engine.create();
  world= engine.world;

  ground = new Ground(600,780,1200,40);
  platform = new Ground(150,600,300,400);

  box1 = new Box(700,720,70,70);
  box2 = new Box(920,720,70,70);
  pig1 = new Pig(810,720);
  log1 = new Log(810,660,20,300,PI/2);

  box3 = new Box(700,640,70,70);
  box4 = new Box(920,640,70,70);
  pig2 = new Pig(810,640);
  log2 = new Log(810,580,20,300,PI/2);

  box5 = new Box(810,560,70,70);
  log3 = new Log (760,520,20,150,PI/7);
  log4 = new Log(870,520,20,150,-PI/7);

  bird= new Bird(200,230);
  bird2 = new Bird(150,350);
  bird3 = new Bird(100,350);
  bird4 = new Bird(50,350);

  birds.push(bird4);
  birds.push(bird3);
  birds.push(bird2);
  birds.push(bird);
  
  slingshot = new Slingshot(bird.body,{x : 200, y : 230 });
  
}

function draw() {
  if(background_img)
  background(background_img);  
  textSize(35);
  fill("white");
  text("Score :" + score,width-200,50);

  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  platform.display();
  pig1.display();
  pig1.score();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  pig2.score();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  bird2.display();
  bird3.display();
  bird4.display();
  slingshot.Display();
 
}
 
function mouseDragged(){
  if(gamestate=== 0 ){
  Matter.Body.setPosition(birds[birds.length-1].body,{x : mouseX, y : mouseY});
  Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:-5});
  bird_select.play();
  return false ;

}
}

function mouseReleased(){
  gamestate = 1;
  slingshot.fly();
  bird_flying.play();
  birds.pop();
  return false ;
}

function keyPressed(){
if(keyCode === 83 && gamestate === 1){
if( birds.length>=0){
  Matter.Body.setPosition(birds[birds.length-1].body, {x: 200, y: 200});
  slingshot.attach(birds[birds.length-1].body);
  bird.visibility=255;
  bird.trajectory= [];
  gamestate = 0;
}

}
}
 async function date_time(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var daytime = responseJSON.datetime;
var hour = daytime.slice(11,13);

if(hour>=07&&hour<=19){
  bg = "images/bg.png";
}
else{
  bg = "images/bg2.jpg";
}
background_img=loadImage(bg);
}


