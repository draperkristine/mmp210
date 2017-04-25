var bugs = [];
var x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;

function setup(){
 createCanvas(720, 400);
    
    r = random(255);
    g = random(255);
    b = random(255);
   background(r, g, b);
    for (var i=0; i < 50; i++){
        bugs.push(new Jitter());
    }
}

function draw() {
    
    for (var i=0; i<bugs.length; i++){
            bugs[i].move;
            bugs[i].display();
    }
    
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);
    
    segment(x, y, angle1);
    
    fill(r, g, b, 20);
     stroke(r, g, b);
    strokeWeight(20);
     
    noStroke();
    ellipse(x, y, 100, 100);
    
    x = x + random(-1, 1);
    
    y = y / 10
    
}

function Jitter(){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10,30);
    this.speed = 1;
    
    this.move = function(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };
    
    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
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