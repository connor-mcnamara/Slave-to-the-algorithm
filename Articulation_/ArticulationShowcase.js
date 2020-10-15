var song, mode, enterbutton, bg, amplitude, pausebutton, playbuttont, questrial, helvetica;
let video;
let poseNet;
let poses = [];
let ballPositions = [];
const MAX_POS = 80;
var slider; 


function preload() {

//Load Song
song = loadSound ('data/Bicep-Glue.mp3');
amplitude = new p5.Amplitude();

//Load Fonts
questrial = loadFont('data/Questrial-Regular.ttf');
helvetica = loadFont('data/IntegralCF-Bold.otf');
integralreg = loadFont('data/IntegralCF-Regular.otf');
}

function setup() {
mode = 0;
createCanvas(windowWidth,windowHeight);
ellipseColor = color(141, 217, 215, 180);


//Images
visualbg = loadImage('data/visualbg.jpg'); 
bg = loadImage('data/artbg.jpg'); //source: https://www.cntraveller.com/gallery/best-festivals-in-the-world
james = loadImage('data/JamesElliott.png'); //source: https://www.vanityfair.com/style/2020/03/music-festival-cancellations-coronavirus
landingtext = loadImage('data/landingtext.png');
  
     
//Buttons 
pausebutton = createImg('data/pausebutton.png');
pausebutton.mousePressed(pausesong);
pausebutton.position(windowWidth/2, windowHeight/1.076);
pausebutton.size(35,35);
pausebutton.hide();
  
playbutton = createImg('data/playbutton.png');
playbutton.mousePressed(playsong);
playbutton.position(windowWidth/2, windowHeight/1.076);
playbutton.size(35,35);
playbutton.hide();

volumeicon = createImg('data/Volume.png');
volumeicon.position(windowWidth/1.19, windowHeight/1.076);
volumeicon.size(22,22);
volumeicon.hide();
  
enterbutton = createButton('ENTER').style('padding', '25px');
enterbutton.position(windowWidth/2 - enterbutton.width*1.5 ,windowHeight/1.4);
enterbutton.style("background-color", "#8DD9D7");
enterbutton.style("color", "#FFFFFF");
enterbutton.style("border-radius", "20px");
enterbutton.style("border", "none");
enterbutton.style("padding", "20px");
enterbutton.style("width", "200px");
enterbutton.mousePressed(EnterArticulation);
enterbutton.mouseOver(hoverdarken);
enterbutton.mouseOut(hoverlighten);
  
//Volume Slider 
slider = createSlider(0, 1, 0.2, 0.2);
slider.hide();
slider.position(windowWidth/1.15,windowHeight/1.076);

//PoseNet Setup
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


//Button Functions
function hoverdarken() {
  enterbutton.style("background-color", "#70AFAD");
}
function hoverlighten() {
 enterbutton.style("background-color", "#8DD9D7");
}

//Pause button when clicked
function pausesong() {
if (song.isPlaying()) {
song.pause();
} else {
song.play();
}
ellipseColor = color(141, 217, 215, 240);
pausebutton.hide();
playbutton.show();
}



//Play button when clicked
function playsong() {
if (song.isPlaying()) {
song.pause();
} else {
song.play();
}
playbutton.hide();
pausebutton.show();
}


// Starts music when landing page is left
function EnterArticulation(){ 
  mode=1;
  if (mode==1) {
  if (song.isPlaying()) {
  song.pause();
  } else {
song.play();
  }
}
enterbutton.hide();
pausebutton.show();
slider.show();
volumeicon.show();
}


function draw() {
background(visualbg);
  
//Landing page assests
if (mode==0) {
background(bg);
text('WELCOME TO', windowWidth/2,windowHeight/2.7);
textFont(helvetica);
textSize(120);
textAlign(CENTER);
text('ARTICULATION.', windowWidth/2,windowHeight/1.9);
textFont(integralreg);
textSize(20);
textAlign(CENTER);
fill(255);
}   


if (mode==1) {     
 song.setVolume(slider.value()); 

let level = amplitude.getLevel();
let size = map(level, 0, 1, 200, 1200); 
image(james, 30,30, 130, 130);
fill(200);
text('Move your head to move the ball!', windowWidth/1.96, windowHeight/1.10);
textSize(15);
fill(255);
text('Now Playing: James Elliott (DJ Set)', 275,42);
textFont(questrial);
textSize(13)
;
      
//Gets poses and sets ellipse values relative to nose  
if (poses.length > 0) {
let pose = poses[0].pose;
let nose = pose['nose'];
fill(ellipseColor);
ellipse(nose.x, nose.y, size, size);
ellipse(nose.x, nose.y, size, size);
noStroke();
      
//Ball trail
ballPositions.push({x: nose.x, y: nose.y});
if (ballPositions.length > MAX_POS) {    //Ellipse trail by cassie
ballPositions.shift();
} 
for (let i = 0; i < ballPositions.length; i +=1) {
ellipse(ballPositions[i].x, ballPositions[i].y, i, i);

if  (song.isPlaying()) {
ellipseColor = color(random(255), random(255), random(255), 180);
}
}
}
}
}
