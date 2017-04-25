var x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;

function setup(){
 createCanvas(720, 400);
    background(20)
    r = random(255);
    g = random(255);
    b = random(255);
   
}

function draw() {
    
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);
    
    segment(x, y, angle1);
    
    fill(r, g, b, 20);
     stroke(r, g, b);
    strokeWeight(20);
    
}

function mousePressed() {
    
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
    rotate(a);
    line(0, 0, segLength,0);
    ellipse(0, 0, 10);
    pop();
}