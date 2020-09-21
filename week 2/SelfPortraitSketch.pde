void setup(){
background(134,23,123);
size (500, 500);
}  

void draw(){
stroke (0);
line (mouseX, mouseY, 250, 250);
fill(255,0,0);
//rect(20, 20, 40, 60); 
fill(mouseX/2, mouseY/2, (mouseX + mouseY)/4);
noStroke();
ellipse(mouseX, mouseY, 60, 60);
}
  
void keyPressed(){
  background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
}
