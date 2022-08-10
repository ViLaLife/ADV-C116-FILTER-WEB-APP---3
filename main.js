nosex=0
nosey=0

function preload(){
clown_nose=loadImage("https://i.postimg.cc/rp74Nq3Z/580b57fbd9996e24bc43bed5.png")
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y+10;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
        
    }
}

function modelLoaded(){
    console.log("poseNet is initialize")
}

function draw(){
image(video, 0, 0, 300, 300);

image(clown_nose, nosex, nosey, 50, 30);
}

function take_snap(){
    save("myFilter.png")
}

