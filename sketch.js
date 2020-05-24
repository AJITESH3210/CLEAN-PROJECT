const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var box1, box2, box3;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
   
	box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(225,645,70,70)
}

function draw(){
    background(0);

    Engine.update(engine);

  //  console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
	
	paper.display();
}