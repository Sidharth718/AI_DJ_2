
song = "";

function preload(){
song = loadSound("music.mp3")
}

function setup(){
canvas = createCanvas(600,500);
canvas.position(420, 200);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 600, 500);
}

function Music_button(){
song.play();
}