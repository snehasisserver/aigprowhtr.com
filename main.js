var leftWristX=0;
var rightWristX = 0;
var difference=0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
video.position(150,150);
    var canvas = createCanvas(550,550);
    canvas.position(850,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

    }
}
function draw(){
    background("#111111");
    textSize(difference);
    fill("green");
    text('snehasis',10,200);
}