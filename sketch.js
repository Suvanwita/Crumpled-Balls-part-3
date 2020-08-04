
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var paper,ground,dustbin;
var body1,body2,body3;


function preload(){
   // dustbinImg=loadImage("dustbingreen.png");
}
function setup() {
	var canvas = createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
	
	//create the paper
	paper=new Paper(50,50,50,50);
	
	//Create a Ground
	ground = new Ground(750,540,1500,20);
	 
   // dustbin=new Dustbin(1300,450,100,250);
   // World.remove(world,dustbin);

    body1=new Support(1250,515,10,20);
    body2=new Support(1350,460,10,155);
    body3=new Support(1300,525,100,10);


    
	
	launcher = new Launcher(paper.body,{x:200, y:150});
  }

function draw() {
   background(240);
   Engine.update(engine);
   ground.display();
   
  // dustbin.display();
   
  paper.display();
   launcher.display();

  body1.display();
 body2.display();
  body3.display();



}
 

/*
function keyPressed(){
if(keyCode===UP_ARROW){
//if(paper.body.position.x<550){
Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-100});
}
}
*/

function mouseDragged(){
    
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    launcher.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(paper.body);
    }
}