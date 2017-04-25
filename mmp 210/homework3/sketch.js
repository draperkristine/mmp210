function setup(){
createCanvas(680, 460);
    
var x = 340;
    
var y = 230;
    
var h = 110;
    
var angle1 = 100;    

var angle2 = 4;
    
var angle3 = 45;

var angle4 = 9;

    fill('blue');
  strokeWeight(4);  
ellipse(x, y, 340, 230);
    
    fill('yellow');
    stroke(4);
    strokeWeight(5);
    triangle(x, y, angle1, angle1 * angle2, angle3, angle3 - angle4);
    triangle(x - h, y + h, angle1, angle1 * angle2, angle3, angle3 - angle4);
    
    noFill();
    stroke('black');
    textSize(72);
    textFont('Sans seriff' )
text("Kristine", y - angle2, y + 20);
   
    
  
}