var redSqr; // These declare global variables for square colors
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
  
  redSqr = random(256); // sets the color vars to random values
  grnSqr = random(256); // ^
  bluSqr = random(256); // ^
  
  circleX = random(21, 780); // These make the circle start in a random position in the canvas
  circleY = random(21, 580); // ^
  circleXDir = random(dirChoices); // These make the circle movement values start at random
  circleYDir = random(dirChoices); // ^
}

function draw() {
  
  background(255);
  
  for(var i = 15; i <= 785; i += 180) { // this is a nested for loop
    for(var j = 15; j <= 585; j += 180){ // it creates rows and colums of squares 
      fill(redSqr, grnSqr, bluSqr); // the squares are assigned to the Sqr variables
      rect(i, j, 20, 20); // ^
    }
  }
  
  ellipse(circleX, circleY, 40, 40); // draws the circle
  
  circleX += circleXDir; // moves the circle based on the circleXDir and circleYDir values
  circleY += circleYDir; // ^
  
  if(circleX >= 780 || circleX <=20){
    circleXDir = -circleXDir; // this if loop reverses the direction if the circle hits an edge.
  }
  
  if(circleY >= 580 || circleY <=20){
    circleYDir = -circleYDir; // same as above loop, but with the y direction
  }

  rect(buttonX, buttonY, buttonWidth, buttonHeight); // makes the button
  

}

function mousePressed() {
  redSqr = random(256); // these reassign the colors of the squares every time the mouse is presed
  grnSqr = random(256); // ^
  bluSqr = random(256); // ^
  
  if(mouseX <= buttonX + buttonWidth/2 && mouseX >= buttonX - buttonWidth/2 && mouseY <= buttonY + buttonHeight/2 && mouseY >= buttonY - buttonHeight/2){
    circleXDir = random(dirChoices); // This changes the circle direction when the button is pressed
    circleYDir = random(dirChoices); //
  }
}