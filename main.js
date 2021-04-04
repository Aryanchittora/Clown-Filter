nose_x = 0;
nose_y = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 20;
        nose_y = results[0].pose.nose.y - 20;
        console.log('Nose x = ' + results[0].pose.nose.x);
        console.log('Nose y = ' + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log("Pose Net Initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 40, 40);
}

function picture() {
    save("filtered clown Image.png")
}