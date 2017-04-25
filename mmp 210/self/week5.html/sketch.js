// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
    
}

function draw() {
    background(3, 4, 27);
    
    var windowWidth = width/4; // window width
    var windowHeight = height/1; // window height
    
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
       for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill(3, 4, 40);
           rect(x, y, windowWidth/2, windowHeight/3);
           
           fill(frameCount,0, 255);
           
           
     
       rect(x+6, y*1.1, windowWidth/2.4, windowHeight/3.5);
           
           fill(3, 4, 40);
         rect(x+11, y/.9, windowWidth/2.8, windowHeight/3.6);
           
            fill('black');
            rect(x/2.3, y*2.1, windowWidth/.2, windowHeight/14); 
            
           rect(x + windowWidth/8, y + windowHeight/16, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/8, y + windowHeight/16 * 2, windowWidth/4, windowHeight/8);
           
           
        }
    }
        
}