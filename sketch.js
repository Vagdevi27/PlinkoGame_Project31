const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var particles = [];
var divisions = [];
var plinkos = [];

var engine, world, ground;
function setup() {
  createCanvas(480,700);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
  ground = new Ground(240,660,480,20)

  for (var i= 0, startX=0; startX <= 480; i = i + 1, startX = startX + 70){
      divisions.push(new Division(startX, 500, 10,300));
  }
 // ground2 = new Ground(240,50,480,40)
 for (var i= 0, startX=30; startX <= 480; i = i + 1, startX = startX + 70){
  plinkos.push(new Plinko(startX,250));
}
for (var i= 0, startX=20; startX <= 480; i = i + 1, startX = startX + 50){
  plinkos.push(new Plinko(startX,180));
}

for (var i= 0, startX=0; startX <= 480; i = i + 1, startX = startX + 40){
  plinkos.push(new Plinko(startX,110));
}



}

function draw() {
  background("black");  
 
  ground.display()
  //drawSprites();
  //ground2.display()
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  Engine.update(engine)
  
  for (var i= 0; i < divisions.length; i =i + 1){
    divisions[i].display();
  }

  for (var i= 0; i < plinkos.length; i =i + 1){
    plinkos[i].display()
  }


  for (var i= 0; i < particles.length; i =i + 1){
    particles[i].display();
  }

  
}