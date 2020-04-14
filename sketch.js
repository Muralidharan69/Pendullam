const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_option = {
        isStatic : true
    }
    ground = Bodies.rectangle(200,330,400,20,ground_option);
    World.add(world,ground);
    
    var holder_option = {
        isStatic : true
    }
    holder = Bodies.rectangle(200,100,200,20,holder_option);
    World.add(world,holder);
    
    var ball_option = {
        restitution : 1.0,
        density : 1.0
    }
    ball = Bodies.circle(220,200,40,ball_option);
    World.add(world,ball);

    
    var options ={
     bodyA : ball,
     bodyB : holder,
     stiffness : 0.004,
     length : 100
    }
    var string = Constraint.create(options);
    World.add(world,string);

   
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    rectMode(CENTER);
    fill("black");
    rect(ground.position.x,ground.position.y,400,20);
     fill("black");
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,200,20);
    fill("blue");
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40);
    line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);
    if(keyCode === 32){
        ball.position.x = mouseX;
        ball.position.y = mouseY;
    } 
}

