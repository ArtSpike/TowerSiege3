const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1
//var pig1,log6;
//v/ar backgroundImg;
var platform;
var score = 0;

function preload(){

    //backgroundImg=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(840,height,380,20);
    platform=new Ground(150,305,300,170);

    box1 = new Box(700,350,70,70);
    box2 = new Box(770,350,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(840,350,70,70);
    box4 = new Box(910,350,70,70);
    box5 = new Box(980,350,70,70);
    box6 = new Box(770,290,70,70);
    box7 = new Box(840,290,70,70);
    box8 = new Box(910,290,70,70);
    box9 = new Box(840,230,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    //log6=new Log(250,150,80,PI/2);

    bird = new Bird(100,100);

    sling = new Slingshot(bird.body,{x:200,y:100});

    

}

function draw(){
    background("black");
    Engine.update(engine);
    console.log(score);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    text("Score  " + score, width-300, 50)
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    //log4.display();
    //log5.display();
    //log6.display();

    bird.display();
    sling.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

    
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY});
}


function mouseReleased(){
    sling.fly();

}