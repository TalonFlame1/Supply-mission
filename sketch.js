var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	  rectangle1 = createSprite (260,600,20,100)
	rectangle1.shapeColor = "red"
	
	rectangle2 = createSprite (350,650,200,30)
	rectangle2.shapeColor = "red"

	rectangle3 = createSprite (440,600,20,100)
	rectangle3.shapeColor = "red"
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 rectBody1 = Bodies.rectangle (260,600,20,100, {isStatic:true} ) 
	 World.add(world, rectBody1)

	 rectBody2 = Bodies.rectangle (350,650,200,30, {isStatic:true})
	 World.add(world, rectBody2)

	 rectBody3 = Bodies.rectangle (440,600,20,100, {isStatic:true})
	 World.add(world, rectBody3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	rectMode (CENTER)
	rect (rectBody1.position.x, rectBody1.position.y, 20,100)
	rect (rectBody2.position.x, rectBody2.position.y, 200,30)
	rect (rectBody3.position.x, rectBody3.position.y, 20,100)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody, false)  
  }
}



