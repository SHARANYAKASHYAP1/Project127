

function setup() {
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


