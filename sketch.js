
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object, ground;
function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution: 1.2,
    friction: 0.5
  }
  object = Bodies.circle(400,650,50, options);
  World.add(world, object)


  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(600,700,1200,50, ground_options)
  World.add(world, ground);

  console.log(object)
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  //rect(400,200,50,50);
  rect(ground.position.x, ground.position.y, 1200,50);
  ellipseMode(CENTER);
  ellipse(object.position.x, object.position.y, 100);
}