var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg=loadAnimation("images/fairyImage.png","images/fairyImages2.png")
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
    fairyVoice=loadSound("sound/JoyMusic");
	//crea el sprite del hada, y agrega la animación para el hada
    fairy=createSprite(200,200);
	fairy.addAnimation("a", fairyImg);

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

  if(star.y > 470 && starBody.position.y > 470){
	  matter.Bodies.setStatic(starBody,true);
  }
  //escribe aquí el código para detener la estrella en la mano del hada
 

  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyPressed === LEFT_ARROW){
		fairy.y.position = fairy.y,position -5;
	}

	if(keyPressed === RIGHT_ARROW){
		fairy.y.position = fairy.y,position +5;
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}
