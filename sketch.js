
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperobj,dustbinobj,groundobj,world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj = new Ball(200,450,70);
	groundobj = new Ground(width/2,670,width,20);
	dustbinobj = new DUSTBIN(1200,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperobj.display();
  dustbinobj.display();
  groundobj.display();


 
}



function keyPressed() { 
	if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145});
} }
