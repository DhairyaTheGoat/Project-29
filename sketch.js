const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var waterMelon
var waterMelonOptions
var waterMelonLinker

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
  rope = new Rope(6,{x:250,y:30})

  waterMelonOptions ={
    density:0.001
  }

  waterMelon = Bodies.circle(300,300,14,waterMelonOptions)
  Matter.Composite.add(rope.body,waterMelon)
  waterMelonLinker = new Link(rope,waterMelon)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  
ellipse(waterMelon.position.x,waterMelon.position.y,14,14)

  Engine.update(engine);
  

 
   
}
