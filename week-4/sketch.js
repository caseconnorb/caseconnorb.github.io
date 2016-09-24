var redSqr; // creates variables used for fill colors
var grnSqr; // ^
var bluSqr; // ^

var circleX; // creates variables used to move the circle
var circleY; // ^
var circleXDir; // ^ these are the speeds/directions the circle will move
var circleYDir; // ^
var dirChoices = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]; // this is used later to get a random value from -5 to 5 that does not include 0.

var buttonX = 400; // creates values for the button size and location
var buttonY = 300; // ^
var buttonWidth = 50; // ^
var buttonHeight = 50; // ^

function setup() {
  
  frameRate(60);
  createCanvas(800, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  
  randomColors(); // call these functions during setup
  randomStart(); // ^
  randomDir(); // ^
}

function draw() {
  
  background(255);
  makeSquares(); // call these functions whenever the page is drawn
  makeCircle(); // ^
  makeButton(); // ^
}

function mousePressed() {
  randomColors(); // when the mouse is pressed, call random Colors
  
  if(mouseX <= buttonX + buttonWidth/2 && mouseX >= buttonX - buttonWidth/2 && mouseY <= buttonY + buttonHeight/2 && mouseY >= buttonY - buttonHeight/2){
    randomDir(); // when the mouse is pressed withing this area, call randomDir
  }
}

function randomColors() {
  redSqr = random(256); // sets the color vars to random values
  grnSqr = random(256); // ^
  bluSqr = random(256); // ^
  fill(redSqr, grnSqr, bluSqr); // the fills are assigned to the Sqr variables
}

function randomDir() {
  circleXDir = random(dirChoices); // Sets the circle movement values to random values from dirChoices
  circleYDir = random(dirChoices); // ^
}

function randomStart() {
  circleX = random(21, 780); // These send the circle to a random position in the canvas
  circleY = random(21, 580); // ^
}

function makeCircle() {
  ellipse(circleX, circleY, 40, 40); // draws the circle
  
  circleX += circleXDir; // moves the circle based on the circleXDir and circleYDir values
  circleY += circleYDir; // ^
  
  if(circleX >= 780 || circleX <=20){
    circleXDir = -circleXDir; // this if loop reverses the direction if the circle hits an edge.
  }
  
  if(circleY >= 580 || circleY <=20){
    circleYDir = -circleYDir; // same as above loop, but with the y direction
  }
}

function makeSquares() {
  for(var i = 15; i <= 785; i += 180) { // this is a nested for loop
    for(var j = 15; j <= 585; j += 180){ // it creates rows and colums of squares 
      rect(i, j, 20, 20); // ^
    }
  }
}

function makeButton() {
    rect(buttonX, buttonY, buttonWidth, buttonHeight); // makes the button
    fill(0); // makes the upcoming word visible
    text("Press!", buttonX, buttonY); // adds a word in the button
    fill(redSqr, grnSqr, bluSqr); // sets the fill back to normal
}