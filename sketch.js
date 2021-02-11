const Engine = Matter.Engine; 
const World = Matter.World; 
const Body = Matter.Body; 
const Bodies = Matter.Bodies;
var engine, world, ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height - 10, width, 20);
  console.log(width);
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 20));
    //console.log(j, y, plinkos);
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 20));
    //console.log(j, y, plinkos);
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275, 20));
    //console.log(j, y, plinkos);
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375, 20));
    //console.log(j, y, plinkos);
  }

  


}

function draw() {
  background(0,0,0);
  ground.display();
  for (var i = 0; i <= 4; i++) {
    divisions[i].display();
  }

  for (var i = 0; i <= plinkos.length - 1; i++) {
    plinkos[i].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particles(random(100, 120), 10, 10));
  }

  for (var i = 0; i <= particles.length - 1; i++) {
    particles[i].display();
    Matter.Body.setStatic(particles[i].body, false);
  }

  drawSprites();
}