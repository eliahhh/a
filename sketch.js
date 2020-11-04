
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject;
var box1;
var box2;
var box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperobject = new Paper(200,640,40);

	
	box3 = new Dustbin(600,550,180,200);

	ground = createSprite(200,680,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  
  box3.display();

  paperobject.display();
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});

}

}