const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
/*var pig1,pig2;
var log1,log2,log3,log4;
var bird;*/
var background_img;

function preload(){
    background_img = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,57,57);
    box2 = new Box(300,300,57,57);
    ground = new Ground(600,height,1200,20);
    /*pig1 = new Pigs(225,300);
    log1 = new Logs(225,250,209,PI/2);
    bird = new Bird(100,100);
    box3 = new Box(150,200,57,57);
    box4 = new Box(300,200,57,57);
    log2 = new Logs(225,150,220,PI/2);
    pig2 = new Pigs(225,150);
    box5 = new Box(230,100,57,57);
    log3 = new Logs(250,40,110,PI/-6);
    log4 = new Logs(190,40,110,PI/6);*/
    //PI = 180
    //PI/2 = 90
    //PI/4 = 45
}

function draw(){
    background(background_img);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    //pig1.display();
    //log1.display();
    //bird.display();
    //box3.display();
    //box4.display();
    //log2.display();
    //pig2.display();
    //box5.display();
    //log4.display();
    //log3.display();
    ground.display();
}