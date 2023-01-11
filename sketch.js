var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    //vozFada = loadSound("song/JoyMusic.mp3");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
  // vozFada.play()
    //criar sprite de fada e adicionar animação para fada
   Fada = createSprite(130,520)
   Fada.addAnimation("Fada",imgFada)
   Fada.scale = 0.25
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
    background(bgImg);
   
    star.x= starBody.position.x
    star.y= starBody.position.y
   
    console.log(star.y);
  //Digite aqui o IF
   if (star.y > 470 && starBody.position.y > 470) {
        Matter.Body.setStatic(starBody,true)
   }
   
    drawSprites();
   
  }
   
  function keyPressed() {
   
      if(keyCode === RIGHT_ARROW){
             fairy.x = fairy.x + 20;
      }
   
   
     //if Left Arrow
   if (keyCode=== LEFT_ARROW)
   
      if (keyCode === DOWN_ARROW) {
    //Matter.Body.setStatic(starBody,True);
 //Matter.Body.setStatic(starBody);
 //Matter.Body.setStatic(false);
 Matter.Body.setStatic(starBody,false);

   
 
}
}

   
