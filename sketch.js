const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Rubber1;
var Stone1;
var Hierro1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    Rubber1 = new Rubber(222,200,70,70);
    Stone1 = new Stone(333,200,70,70);
    Hierro1 = new Hierro(444,200,70,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
Rubber1.display();
Stone1.display();
Hierro1.display();
    
 
}