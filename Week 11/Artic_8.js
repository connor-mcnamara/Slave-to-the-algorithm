var song, mode, enterbutton, bg, amplitude, pausebutton, playbutton;
let video;
let poseNet;
let poses = [];
let ballPositions = [];
const MAX_POS = 50;


function preload() {
song = loadSound ('data/Bicep-Glue.mp3');//Load song
amplitude = new p5.Amplitude();
}

function setup() {
  mode = 0;
  enterbutton = createButton('ENTER').style('padding', '25px');
  createCanvas(windowWidth,windowHeight);
  enterbutton.position(640,500);
  enterbutton.style("background-color", "#8DD9D7");
  enterbutton.style("color", "#FFFFFF");
  enterbutton.style("border-radius", "20px");
  enterbutton.style("border", "none");
  enterbutton.style("padding", "20px");
  enterbutton.style("width", "200px");
  enterbutton.mousePressed(EnterArticulation);
  enterbutton.mouseOver(hoverdarken);
  enterbutton.mouseOut(hoverlighten);
  visualbg = loadImage('data/visualbg.jpg');
  bg = loadImage('data/ArtBG.png');
  james = loadImage('data/JamesElliott.jpg');
  landingtext = loadImage('data/landingtext.png');
  ellipseColor = color(141, 217, 215);
  
  video = createCapture(VIDEO); 
  video.size(width, height);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
  poses = results;
  });
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded'); 
}

function hoverdarken() {
  enterbutton.style("background-color", "#70AFAD");
}

function hoverlighten() {
 enterbutton.style("background-color", "#8DD9D7");
}

function pausesong() {
  if (song.isPlaying()) {
  song.stop();
 } else {
song.play();
 }

}

function playsong() {
  if (song.isPlaying()) {
  song.stop();
 } else {
song.play();
 }

}

function EnterArticulation(){ 
  mode=1;
  if (mode==1) {
  if (song.isPlaying()) {
  song.stop();
  } else {
song.play();
  }
}
enterbutton.hide();
}


function draw() {
  background(visualbg);
  
  if (mode==0) {
 background(bg);
 text('WELCOME TO THE ARTICULATION EXPERIENCE.', windowWidth/2,windowHeight/2);
 textSize(50);
 textAlign(CENTER);
 fill(255);
}   
 if (mode==1) {     
     pausebutton = createImg('data/pausebutton.png');
     pausebutton.mousePressed(pausesong);
     pausebutton.position(displayWidth/2, displayHeight/1.35);
     pausebutton.size(35,35);
     
     playbutton = createImg('data/playbutton.png');
     playbutton.mousePressed(playsong);
     playbutton.position(displayWidth/1.9, displayHeight/1.35);
     playbutton.size(35,35);
 
//var songcheck;
  
//if (song.isPlaying()) {
  // songcheck=1;
// }else{
  // songcheck=0;
// }
 
// if (songcheck==1) {
// pausebutton.show();
// playbutton.hide();
//}  
  
// if (songcheck==0) {
// playbutton.show();
// pausebutton.hide();
// }
 
      let level = amplitude.getLevel();
      let size = map(level, 0, 1, 100, 900); 
      image(james, 30,30, 130, 130);
    
     
      fill(200);
      text('Click Enter to change colour, Move your head to move the ball!', displayWidth/1.96, displayHeight/1.4);
      textSize(15);
      fill(255);
      text('Now Playing: James Elliott', 265,42);
      textSize(12)
      ;
      
      if (poses.length > 0) {
      let pose = poses[0].pose;
   
      let nose = pose['nose'];
      fill(ellipseColor);
      ellipse(nose.x, nose.y, size, size);
      noStroke();
      

    ballPositions.push({x: nose.x, y: nose.y});
  
     
    if (ballPositions.length > MAX_POS) {    //Ellipse trail by cassie
    ballPositions.shift();
    } 

     for (let i = 0; i < ballPositions.length; i +=1) {
     ellipse(ballPositions[i].x, ballPositions[i].y, i, i);
  }
}
}
}

function keyPressed() {
if (keyCode === ENTER) {
ellipseColor = color(random(255), random(255), random(255));
}
}
