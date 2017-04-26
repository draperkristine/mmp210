var sourceText = "courage is resistance to fear, mastery of fear, not absence of fear";

var words = sourceText.split(" ");

function setup() {
  createCanvas(640, 640);
  
//background('blue');
    
    var rectangles = 1000;
    
    var columns = 10;
    
    var rows = 20;
    
    var w = width / columns;
    
    var h = height / rows;
    ;
    noStroke();
    
    
    
    for (var x = 0; x <= rectangles; x += w){
        for(var y = 0; y <= rectangles; y += h){
            
            var r = random(0, 51);
            var g = random(20, 255);
            var b = random(200, 255);
            
            
            fill(r, g, b);
             rect(x, y, rectangles / 5, rectangles / 5);
             rect(x * 4, y * 3, rectangles / 0.25);
            
         
        }
            
        }
    
       
        /*if(x * y < height){
            r = random(255);
            g = random(255);
            b = random(255);
           
             rect(x, y, rectangles / 5, rectangles / 5);
             rect(x * 4, y * 3, rectangles / 0.25);
            
            x +=(320, -640);
    }
    else if (x * y > height){
        fill(255, 255, 255)
        
         rect(x, y, rectangles / 5, rectangles / 5);
             rect(x * 4, y * 3, rectangles / 0.25);
        
        x += (54, 34);
    }*/
   
      textSize(36)
        textAlign(CENTER, CENTER);
        for (var i = 0; i < words.length; i++){
            stroke('black');
            strokeWeight(2);
            fill(r, g, b);
            textFont('Impact');
            
            text(words[i], random(width), random(height));
}

// function draw(){
      
    //    }
    }