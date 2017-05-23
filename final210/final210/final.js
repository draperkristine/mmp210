var pacX = 100,
    pacY = 100;

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
}

function setup() {
    
  createCanvas(720, 400);
  strokeWeight(20.0);
  stroke(255, 100);
    noStroke();
    //pinky controls
    console.log("hello");
 
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
  ellipse(pacX, pacY, 20, 20);
    

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
}

//pac-man
function segment(pacX, pacY, a) {
  push();
  translate(pacX, pacY);
  rotate(a);
 // line(0, 0, segLength, 0);
  pop();
}