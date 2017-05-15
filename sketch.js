function setup() {
  createCanvas(800,800);
}

var x = 390;
var y = 390;

function draw() {
  background(0);
  noStroke();
  fill(0,255,0);
  rect(600,600,200,200);
  fill(0,0,255);
  rect(600,0,200,200);
  fill(0,255,255);
  rect(0,600,200,200);
  fill(255,0,0);
  rect(x,y,20,20);
  
  if(x>580 && y>580){
    fill(0,255,0);
    rect(600,600,200,200);
    fill(255,255,0);
    var xdif = x-580;
    if(xdif>20){
      xdif=20;
    }
    var ydif = y-580;
    if(ydif>20){
      ydif=20;
    }
    rect(x+(20-xdif),y+(20-ydif),xdif,ydif);
  }
  
  if(x>580 && y<200){
    fill(0,0,255);
    rect(600,0,200,200);
    fill(0,255,255);
    var xdif2 = x-580;
    if(xdif2>20){
      xdif2=20;
    }
    var ydif2 = 200-y;
    if(ydif2>20){
      ydif2=20;
    }
    rect(x+(20-xdif2),y,xdif2,ydif2);
  }
  
  if(x<200 && y>580){
    fill(0,255,255);
    rect(0,600,200,200);
    fill(255,255,255);
    var xdif3 = 200-x;
    if(xdif3>20){
      xdif3=20;
    }
    var ydif3 = y-580;
    if(ydif3>20){
      ydif3=20;
    }
    rect(x,y+(20-ydif3),xdif3,ydif3);
  }
  
  if(x<200 && y<200){
    fill(0,0,0);
    stroke(255);
    rect(0,0,200,200);
    noStroke();
    fill(0,255,0);
    var xdif4 = 200-x;
    if(xdif4>20){
      xdif4=20;
    }
    var ydif4 = 200-y;
    if(ydif4>20){
      ydif4=20;
    }
    rect(x,y,xdif4,ydif4);
  }
  
  if (keyIsDown(LEFT_ARROW))
    if(x===0){
      
    } else{
      x -= 5;
    }
    
  if(keyIsDown(RIGHT_ARROW))
    if(x==780){
      
    } else{
      x += 5;
    }
    
  if(keyIsDown(UP_ARROW))
    if(y===0){
      
    } else{
      y -= 5;
    }
    
  if(keyIsDown(DOWN_ARROW))
    if(y==780){
      
    } else{
      y += 5;
    }
}