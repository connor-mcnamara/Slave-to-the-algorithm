# Week 2

## Summary:  
At the start of this week’s class we discussed the 12 hour challenge and looked at everyone’s challenges which we had done for homework, I explained how I completed the challenge whist creating a brochure for another assignment, by adding a variable of change to the selection of type and colour, it’s fair to say the brochure turned out very interesting, although I didn’t record my results for this challenge so I decided I would redo it within my lunch hour. 

We then took a look into instruction design and algorithmic art from artists such as Sol Lewitt and Manfred Mohr, which was rather interesting and gave me a bit of a feel for the potential in the generative realm. 

In the second half of this class we fired up Processing (which was exciting for me) and began playing around with JAVA to create a self portrait.



## 12 hour challege:

As I didn’t record the outcome of my first 12 hour challenge process and outcomes I decided to do the challenge again, to decide what Youtube video I would watch while eating my lunch today. 

Rules:
•	Roll Dice to select number of words to be generated from 1-6
•	Generate random set of words
•	Search words in Youtube 
•	Roll dice again to select listed video from 1-6 
•	Select video based on number rolled 
•	Flip Coin to determine if this is the video that will be watched, if heads is flipped then watch current video selection else repeat process until heads is found.

First attempt: 
Number of words: 4
Words: Express Gravel Basketball Debut
Video list selection: 2
Selected video: “VersaCourt Installation- Hard-Packed Gravel’
Coin flip: Tails 

Process Repeated
Number of words: 5
Words: Output scream misery conversation inquiry
Video list selection: 4
Selected video: “7 Things to Know about Drill Sergeants //Watch BEFORE Basic Training!! | ☆Bonus Content☆”
Coin flip: Heads 

So the video I’m watching with lunch is “7 Things to Know about Drill Sergeants //Watch BEFORE Basic Training!! | ☆Bonus Content☆”

![](week%202/12%20hour%20challenge.png)

## First Processing Sketch 
Later on, we then we into Processing to have a go at creating our first sketch.  We started by learn some basic JAVA code to create things such  lines, ellipses, rectangles, and giving them colour and/or stroke, We also experimented with having the colour or postion on the page be controlled by the mouse which utilising the Mouse X, Mouse Y functions. The ultimate goal of this task was to create a self-portrait. 

While mine self portrait was very simple (basic face, with colour change mouth) it was fun to play around with processing and get a feel for coding in a way that was not to daunting. 

### Sketch Code
void setup(){
background(0);
size (500, 500);
}  

void draw(){
fill(230, 200,180);
ellipse (250, 250, 150,200);
fill(255);
ellipse (220, 210, 40,40);
ellipse (280, 210, 40,40);
fill (0);
ellipse (220, 210, 15,15);
ellipse (280, 210, 15,15);
fill(mouseX/2, mouseY/2, (mouseX + mouseY)/4);
ellipse (250, 280, 70,30);
noStroke();
}
  
void keyPressed(){
  background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
}



## Artist Research:
I decied to have a look into some of the artist mentioned in the presnetation, in doing so, I found a diverse range of intersting projects, below is one of my favourites from my research.

### "Splotch" By Sol Lewitt
This piece by Sol Lewitt really captured my attention. The form and color distribution were generated through a LeWittian system of projections from a two-dimensional base. An irregular, eccentric outline was used as the footprint of the structure. A one segmented plan within that outline was devised for color and a second plan for height. Finally a three-dimensional computer modelling software was used to produce that model of the work creating this eye catching piece.


## Resources & References: 
Random Word Generator used in 12 hour challege: https://randomwordgenerator.com/

"Splotch", Sol Lewitt: http://makyifong.blogspot.com/2012/11/generative-art-sol-lewitt.html
