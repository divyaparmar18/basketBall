const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var engine, world ;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1700,40)
    DustbinObj = new Dustbin(1090,300,150,0);

     side1 = new Side(1030,300,110, -PI/13);
     side2 = new Side(1100,300,110, PI/13);
     side3 = new Side(1170,250,40, PI/2);

    // side3 = new Side(915,380,70,PI/2);

    boy = new Boy(160,500,350,0);
    paperObj = new PaperBall(150,330,20);
    slingshot = new SlingShot(paperObj.body,{x:155, y:560});

    var render = Render.create({    
        element: document.body,    
        engine: engine,    
        options: 
        {   width: 1200, 
            height: 700,    
            wireframes: false    
        }   
    });

    // Render.run(render);

}

function draw(){
    background("#808080");
    Engine.update(engine);
    boy.display();
    // side1.display();
    // side2.display();
    slingshot.display();
    paperObj.display();
    ground.display();
    DustbinObj.display();
    // side1.display();
    // side3.display();

    textSize(40);
    fill("black")
    text(score, 600, 100);
    
}


function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        score = score + 1;
    }
}

function mouseDragged(){
    Matter.Body.setPosition(paperObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}




