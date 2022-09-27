
function preload(){
 dog_cat_img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600,400);
    background("grey");
    canvas.center();
}

function draw(){
 image(dog_cat_img,0,0,600,400);

 noFill();
 stroke("30");
  rect(100,100, 200,200);

 text("Dog", 100,100);

 

}