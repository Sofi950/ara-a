var araña;
var telarañaGroup;
var background;
var score=0;

function preload(){
elefante = loadImage("elefante.png")
araña = loadImage("araña.png")
telarañaa = loadImage("telaraña.png")
background = loadImage("sabana.webp")
}

function setup() {
 createCanvas(500,500)

 scene=createSprite(0,0,500,500)
 scene.addImage(background)
 scene.scale =2

 araña=createSprite(20,20,30,30)
 araña.addImage(araña)
 araña.scale= 1

 telarañaGroup= new Group()
 elefantee= new Group()
}

function draw() {
background(0)
scene.velocityX = -3 
 if (scene.x < 0){
 scene.x = scene.width/2;
 }
 araña.x = World.mouseX
if (keyDown("space")){
createTelaraña()
}
if (telarañaGroup.isTouching(elefante)){
elefantee.destroyEach()
score = score+100
}

drawSprites()
text("puntuacion: "+ score,300,50)
}

function elefantes(){
var elefante = createSprite(0,Math.round(random(20, 370)), 10, 10)
elefante.addImage(elefante)
elefante.velocityX = 2.5
elefante.lifetime=150
elefante.scale = .1
elefantee.add(elefantes)
}

function createtelaraña(){
var telaraña = createSprite(100, 100, 60, 60)
telaraña.addImage(telarañaa)
telaraña.x = araña.x
telaraña.y=360
telaraña.velocityX = -4;
telaraña.lifetime = 100;
telaraña.scale = 0.3;

telaraña.add(telarañaGroup)
}