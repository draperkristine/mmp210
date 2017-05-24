var pacX = 100,
    pacY = 100;
var spr1;
var img;
var img2;
var cam = 0;
var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;
speed = 5;
function preload(){
    img2 = loadImage("images/pinkyghost.png");
    pac = loadImage("images/pac-man.jpg");
    img3 = loadImage("images/pac-man2.png");
}

function setup() {
    
  createCanvas(720, 400);
  strokeWeight(20.0);
  stroke(255, 100);
    noStroke();
    //pinky controls
    console.log("hello");
    
    
    spr1 = createSprite( width/2, height/2, 100, 100);
    spr1.shapeColor = color(0);
 
}



function draw() {
 // background
    background(pac);
   stroke(226, 204, 0);
  //  line(0, cam, width, cam);
    
    cam++;
    if(cam > height){
        cam = 0;
    }
    image(pac, 720, 400);
    
  //pac man 
  dx = mouseX - pacX;
  dy = mouseY - pacY;
  angle1 = atan2(dy, dx);
  pacX = mouseX - (cos(angle1) * segLength);
  pacY = mouseY - (sin(angle1) * segLength);

  segment(pacX, pacY, angle1);
  image(img3, pacX, pacY, 50, 50);
    

//pinky controls


    if(keyIsDown (RIGHT_ARROW)){
        x = x + speed;
    }
    else if(keyIsDown (DOWN_ARROW)){
        y = y + speed;
    }
    else if(keyIsDown (LEFT_ARROW)){
        x = x - speed;
    }
    else if(keyIsDown (UP_ARROW)){
        y = y - speed;
    }
    image(img2, x, y, 50, 50);
    
 /* I PUT THIS HERE BECAUSE I DONT WANT PINKY TO GO OFF CANVAS BUT I AM UNSURE HOW TO MAKE IT WORK PROPERLY IT IS ALSO ANOTHER SET OF CONTROLS   
    // pac-ma controls 2
    
    img3.velocity.pacX = (mouseX-img3.position.pacX)*0.2;
    img3.velocity.pacY = (mouseY-img3.position.pacY)*0.2;
    img3.collide(img2);*/
}

//pac-man
function segment(pacX, pacY, a) {
  push();
  translate(pacX, pacY);
  rotate(a);
 // line(0, 0, segLength, 0);
  pop();
}
