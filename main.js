noseX = 0;
noseY = 0;

leftwristX = 0;
rightwristX = 0;

size = 0;

function setup() {
canvas = createCanvas(600, 600);
video = createCapture(VIDEO);
video.size(600, 600);
canvas.position(600, 100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    background("#00ffff");
    fill("lightblue");
    stroke("black");
    square(noseX, noseY, size);

    size = leftwristX - rightwristX;
    size = Math.floor(size);
    console.log(size);
}

function modelLoaded() {
    console.log("model loaded")
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
    }
}

