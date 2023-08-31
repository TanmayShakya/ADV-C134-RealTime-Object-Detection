objectDetector = "";
img = '';
status = '';
objects = [];

function preload() {
  img = loadImage('dog_cat.jpg');

}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(380, 380);
  video.hide();

}

function start(){
  ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Object";
  document.getElementById("number_of_objects").innerHTML = "Number Of Object Detected are : "
}

function modelLoaded() {
  console.log("Model is Loaded");
  status = true;
  ObjectDetector.detect(video, gotResult);

}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(results);
    objects = results;


  }
}

function draw() {
  image(video, 0, 0, 380, 380);
  if (status != "") {
    for (i = 0; i < objects.length; i++) {
      ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
      document.getElementById("status").innerHTML = "Status : Detecting Object";
      document.getElementById("number_of_objects").innerHTML = "Number Of Object Detected are : "
      r = random(255);
      g = random(255);
      b = random(255);

      fill(r,g,b);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke(r,g,b);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }

}



