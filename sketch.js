//Create variables here
var dog, happyDog
var database
var foodS, foodStock
var database


function preload(){

  //load images here
  normdog = loadImage('images/DogImg.png')
  happydog = loadImage('images/DogImg1.png')
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250)
  dog.addImage(normdog)
  normdog.resize(400,400)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown('UP_ARROW')){
  writeStock(foodS);
  foodS = foodS -1
  dog.addImage(happydog)
  happydog.resize(400,400)

}
  drawSprites();
  //add styles here
  textSize(20)
  fill(0)
text('press up arrow to feed the dog',50,50)

}
function readStock(data) {
  foodS=data.val()
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
    
  })
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
}

