var x = 100;
var y = 100;
var angle1 = 0.0;
var segLength = 50;
var spr;
var speed = 3;
var ellipseY = [0, 15, 30, 45, 60, 75];
function setup(){
    createCanvas(640, 460);
    
    spr = createSprite(width/2, height/3, 40, 40);
    spr.shapeColor = color(255);
}

 function draw(){
   background('black'); 
   
     Stroke('blue');
     /*rectMode(CENTER);
     fill('gold');
     for (var i = 0; i < ellipseY.length; i++){
         ellipse((i+x)*100, ellipseY[i], 50, 50);
         ellipseY[i] +=1;
     }
     if (i > width){
         speed = 3;
     }
     i = i - speed;*/
     dx = mouseX - x;
     dy = mouseY - y;
     angle1 = atan2(dy, dx);
     x = mouseX - (cos(angle1) * segLength);
     y = mouseY - (sin(angle1) * segLength);
      fill(r, g, b, 20);
     stroke(r, g, b);
     strokeWeight(20);
     noStroke();
     ellipse(x, y, 100, 100);
     x = x + random(-1, 1);
     y = y / 10
 }
function keyPressed(){
    if (keyCode == RIGHT_ARROW) {
        spr.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW){
        spr.setSpeed(1,5, 90);
    }
    else if (keyCode == LEFT_ARROW){
        spr.setSpeed(1.5, 180);
    }
    else if(keyCode == UP_ARROW){
        spr.Speed(1.5, 270);
    }
    else if (key == ''){
        spr.Speed(0, 0);
    }
    return false;
    var d = dist(mouseX, mouseY, 360, 200)
    if (d < 100){
        r = random(255);
        g = random(255);
        b = random(255);
    }
}
function segment(x, y, a) {
    push();
    translate(x, y);
    line(0, 0, segLength, 0);
    ellipse(0, 0, 10);
    pop();
}