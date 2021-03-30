const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreateFrame = 0;

function preload(){
    thunder1 = loadImage("image/1/png");
    thunder2 = loadImage("image/2/png");
    thunder3 = loadImage("image/3/png");
    thunder4 = loadImage("image/4/png");

}

function setup(){
   var canvas = createCanvas(500,700);
    
   engine = Engine.create();
   world = engine.world;

   umbrella = new umbrella(200,500);

   for(var i=0, i < maxDrops; i++){
   drops.push(new createDrops(random(0,500), random(0,500))
    }
}

function draw(){
 Engine.update(engine);
 background("black");


rand = Math.round(random(1,4));
if(frameCount%80 === 0){
    thunderCreatedFame = frameCount;
    Thunder = createSprite(random(10,370), random(10,30),10,10);
    Thunder.addImage(thunder1);
    Thunder.addImage(thunder2);
    Thunder.addImage(thunder3);
    Thunder.addImage(thunder4);
}
    
   thunder.scale = 0.1

if(thunderCreatedFrame + 10 === frameCount && Thunder){
    Thunder.destroy();
}

umbrella.display();

for(var i = 0; i,i < maxDrops; i++){
     drops[i].display();
     drops[i].update();
}
drawSprites();
}   































































