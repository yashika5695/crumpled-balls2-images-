
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , paper , bin1 , bin2 , bin3
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(350 , 680 , 700 , 20)
bin1 = new Dustbin(650 , 635 , 100 , 100)


paper = new Paper(100 , 500 , 30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  bin1.display()
  
paper.display()
  
  

 
}
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body , paper.body.position,{x:50 , y:-21})
	}
}


