function setup(){
createCanvas(800,600);
var r = 255;
var g = 56;
var b = 142;

var x = 255;
    
var y = 550; 
    
var h = 5;    
    
fill(r, g, b);
background('lightgray');
//feet
ellipse(x - 170, y, h * 10, h * 18);
ellipse(x - 30, y - 20, h * 18, h * 10);
    
    
    
    
//hands
strokeWeight(2);
fill(255, 165, 228);
arc(x - 195, y - 100, h * 20, h * 6, y - 190, PI+QUARTER_PI, OPEN)



//body
strokeWeight(2);
fill(255, 165, 228);
ellipse(x - 105, y - 100, h * 40);

    
    
//eyes
fill(24, 22, 135);
strokeWeight(1);
ellipse(x - 55, y - 110, h * 3, h * 9);
ellipse(x - 15, y - 115, h * 2, h * 8);
fill('black');
ellipse(x - 55, y - 116, h * 2, h * 6);
ellipse(x - 16, y - 122, h + 4, h * 4); 

    
    
    //white of eyes
fill('white');
ellipse(x - 56, y - 125, h * 2, h * 3);
ellipse(x - 17, y - 128, h + 2, h + 8);
fill(252, 56, 142);
ellipse(x, y - 85, h * 6, h * 4);
fill("black");
rect(x - 45, y - 90, h * 8, h * 10, h * 4, h * 7, h * 4, h);
fill(252, 56, 142);
ellipse(x - 70, y - 80, h * 6, h * 4);

  
}