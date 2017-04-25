var x = 100,
y = 100,    
angle1 = 0.0,
segLength = 50;
function setup() {
  createCanvas(600, 600);

r = random(255);
g = random(255);
b = random(255);
background(r, g, b);
    strokeWeight(20.0);
    stroke(r, g, b);
}
function draw() {
    
dx = mouseX - x;
dy = mouseY - y;
angle = atan2(dy, dx);
x = mouseX - (cos(angle1) * segLength);
y = mouseY - (sin(angle1) * segLength);

segment(x, y, angle1);    
  noStroke();
    colorMode(HSB, 10)
  for (var i = 1; i <= 2; i+=100){
  for (var j = 1; j <= 2; j++){
      stroke(r, g, b);
      point(i, j);
    fill(frameCount % 255 / j);
    ellipse(
      300+(sin(frameCount/(i+10))*(j+20)),
      150+(j*50),
      x,y);

  }
}
}

function segment(x, y, a){
push();
translate(x, y);
rotate(a);
line(0,0, segLength, 0);
pop();
}