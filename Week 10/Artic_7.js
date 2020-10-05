var song, mode, button, bg, amplitude;
let video;
let poseNet;
let poses = [];
let ellipseColor = 0;

function preload() {
song = loadSound ('data/Bicep-Glue.mp3');//Load song
amplitude = new p5.Amplitude();
}

function setup() {
  mode = 0;
  button = createButton('ENTER');
  createCanvas(windowWidth,windowHeight);
  button.position(displayWidth/2,600);
  button.mousePressed(EnterArticulation);
  bg = loadImage('data/ArtBG.png');
  james = loadImage('data/JamesElliott.jpg');
  pausebutton = loadImage('data/pausebutton.png');
  ellipseColor = random(255);
  
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

function EnterArticulation(){ 
    mode=1;
  if (mode==1) {
  if (song.isPlaying()) {
  song.stop();
  } else {
song.play();
  }
}
button.hide();
}



function draw() {
  background(35, 28, 41);
  
  if (mode==0) {
  background(bg);
  text('WELCOME TO THE ARTICULATION EXPERIENCE.', windowWidth/2,windowHeight/2);
  textSize(50);
  textAlign(CENTER);
  fill(255);
}   
 if (mode==1) {     
   
      let level = amplitude.getLevel();
      let size = map(level, 0, 1, 100, 900); 
      image(pausebutton, displayWidth/2, 900, 40, 40);
      image(james, 50,50, 200, 200);
     
      fill(200);
      text('Click Enter to change colour', displayWidth/1.96, 850);
      textSize(20);
      fill(255);
      text('Now Playing: James Elliott', 400,65);
      textSize(12)
      ;
      
      if (poses.length > 0) {
      let pose = poses[0].pose;
   
      let nose = pose['nose'];
      fill(ellipseColor);
      ellipse(nose.x, nose.y, size, size);
      noStroke();
}
}
}

function keyPressed() {
if (keyCode === ENTER) {
ellipseColor = color(random(255), random(255), random(255));
}
}
 
   // rect(displayWidth/2.02, 870, 6, 30);
  //rect(displayWidth/1.99, 870, 6, 30);
