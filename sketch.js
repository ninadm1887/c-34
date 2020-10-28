var dog,foodS,dogI;
var database,foodStock
function preload()
{
  dog=loadImage("dogImg.png")
  dog=loadImage("dogImg1.png")
}


function setup() {
  database= firebase.database;
  createCanvas(500, 500);
  
}


function draw() {  

  if(KeyWentDown(UP_ARROW))
  writeStock(foodS);
  dogI.addImage(dogImg1.png);
  drawSprites();
  

}

function readStock() {
foodS=data.val();
}

function writeStock(x) {
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({

  })
}