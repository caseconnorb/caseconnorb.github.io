var shapes = []; // makes a variable to hold the shapes

var addTime = 0; // timer variables
var addTimeMin = 120;
var addTimeMax = 300;
var addTimeGoal = 240;
var subTime = 0; // timer variables
var subTimeMin = 120;
var subTimeMax = 300;
var subTimeGoal = 240;


function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  noCursor();
  addTimeGoal = random(addTimeMin, addTimeMax + 1);

  var quads = []; // arrays to go into the later array
  var ellipses = [];
  var triangles = [];

  for (var i = 0; i < 2; i++) {
    quads[i] = new MakeQuad(windowWidth, windowHeight);
  }
  for (var j = 0; j < 2; j++) {
    ellipses[j] = new MakeEllipse(windowWidth, windowHeight);
  }
  for (var k = 0; k < 2; k++) {
    triangles[k] = new MakeTriangle(windowWidth, windowHeight);
  }

  shapes = [quads, ellipses, triangles]; // assigns the type of shape to an array value
}

function draw() {
  background(255, 1);

  for (var j = 0; j < shapes.length; j++) { // continuously draws all shapes and calls functions
    for (var i = 0; i < shapes[j].length; i++) {
      shapes[j][i].drawShape();
      shapes[j][i].changeSize();
      shapes[j][i].timer();
      shapes[j][i].changeColor();
    }
  }
  addTimer();
  subTimer();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //changes the canvas size

  for (var j = 0; j < shapes.length; j++) {
    for (var i = 0; i < shapes[j].length; i++) {
      shapes[j][i].resizeWindow(windowWidth, windowHeight); //calls resizeWindow for all shapes
    }
  }
}

function newShape(shapeArray, shapeType) { // need the two values to run
  var newShape;

  if (shapeType == 0) {
    newShape = new MakeQuad(windowWidth, windowHeight); // makes a new quad
  } else if (shapeType == 1) {
    newShape = new MakeEllipse(windowWidth, windowHeight); // makes a new ellipse
  } else if (shapeType == 2) {
    newShape = new MakeTriangle(windowWidth, windowHeight); // makes a new ellipse
  }

  shapeArray[shapeType].push(newShape); //pushes the newly created shape into the array
}

function addTimer() { // timer used to add new shapes
  if (addTime >= addTimeGoal) {
    newShape(shapes, floor(random(3))); // adds a new shape of a random type
    addTime = 0; // resets timer
    addTimeGoal = random(addTimeMin, addTimeMax + 1); // resetst random timer goal
  } else {
    addTime++; //increments timer
  }
}

function subTimer() { // timer used to subtract shapes
  if (subTime >= subTimeGoal) {
    shapes[floor(random(3))].shift(); // removes the oldest shape of a random type
    subTime = 0; // resets timer
    subTimeGoal = random(subTimeMin, subTimeMax + 1); // resetst random timer goal
  } else {
    subTime++; //increments timer
  }
}

function mousePressed() {
  var fs = fullscreen();
  fullscreen(!fs);
}