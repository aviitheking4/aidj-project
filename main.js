songamazingenglish = ""
songamazingpunjabi = ""


function setup() {
    canvas = createCanvas(700, 700);
    canvas.position(150,100)
    video = createCapture(VIDEO);
    video.size(700, 700)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
    video.hide()
}

function preload() {
    songamazingpunjabi = loadSound("Tunak Tunak Tun - Daler Mehndi.mp3");
    songamazingenglish = LoadSound("Rick_Astley_-_Never_Gonna_Give_You_Up_Qoret.com.mp3")
}

function draw() {
    image(video, 0, 0, 70, 70)
}