function setup(){
createCanvas(800,600);
var r = 255;
var g = 56;
var b = 142;
fill(r, g, b);
background('lightgray');
//feet
ellipse(85, 550, 50, 90);
ellipse(225, 530, 90, 50);
//hands
strokeWeight(2);
fill(255, 165, 228);
arc(60, 450, 100, 30, 360, PI+QUARTER_PI, OPEN)
//body
strokeWeight(2);
fill(255, 165, 228);
ellipse(150, 450, 200, 200);
//eyes
fill(24, 22, 135);
strokeWeight(1);
ellipse(200, 440, 15, 45);
ellipse(240, 435, 10, 40);
fill('black');
ellipse(200, 434, 10, 30);
ellipse(239, 428, 9, 20); 
//white of eyes
fill('white');
ellipse(199, 425, 10, 15);
ellipse(238, 422, 7, 13);
fill(252, 56, 142);
ellipse(255, 465, 30, 20);
fill("black");
rect(210, 460, 40, 50, 20, 35, 20, 5);
fill(252, 56, 142);
ellipse(185, 470, 30, 20);
;
  
}