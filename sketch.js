const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boundary1,boundary2,boundary3,boundary4;

var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  boundary1 = createSprite(5,300,10,600)
  boundary1.shapeColor="red"

  boundary2 = createSprite(200,5,500,10)
  boundary2.shapeColor="red"

  boundary3 = createSprite(395,300,10,600)
  boundary3.shapeColor="red"

  boundary4 = createSprite(200,595,500,10)
  boundary4.shapeColor="red"

  ground1 = new Ground(200,585,500,10)

  for(var k = 0;k <= width; k = k+80){
 divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display();

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
    }
  
  drawSprites();

}