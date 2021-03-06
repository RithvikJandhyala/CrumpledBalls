
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3;
var ground;
var ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,690,800,20);
	side1 = new Side(640,620,20,100);
	side2 = new Side(760,620,20,100);
	side3 = new Side(700,660,100,20);
	ball =  new Ball(50,350);
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  ball.display();
  if(keyDown (UP_ARROW)){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }

 
  drawSprites();
 
}



