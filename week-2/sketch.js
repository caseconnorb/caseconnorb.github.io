function setup() {
  
  frameRate(60); // sets the frame rate at 60
  
  createCanvas(800, 600);
  
  redVal = random(256); // These create random values from 0-255 that can be used for colors.
  greenVal = random(256); // I draw them in setup so the color will be chosen once.
  blueVal = random(256); // ^
  
  background(redVal, greenVal, blueVal); // This uses the previous values to randomize the background color whenever the sketch runs
  
}

var redVal // The color values are created outside of the functions so they can be called by both of them
var greenVal // ^
var blueVal // ^

var rectX = 400; // these establish the starting point for the rectangle
var rectY = 300; // ^
var rectWidth = 60; // ^
var rectHeight = 60; // ^

function draw() {
  
  background(redVal, greenVal, blueVal); // The background is established again here so that it keeps being drawn, preventing trailing images
  
  rectMode(CENTER); // centers the rectangle
  rect(rectX, rectY, rectWidth, rectHeight); // creates a rectangle based on the four variables
  
  rectX = rectX + random(-3, 3); //These change the properties of the rectangle at random
  rectY = rectY + random(-3, 3); // ^
  rectWidth = rectWidth + random(-3, 3); // ^
  rectHeight = rectHeight + random(-3, 3); // ^
  
  var circleX = map(mouseX, 0, width, 100, 700); // these values are used to map the ellipse to the cursor movement
  var circleY = map(mouseY, 0, height, 100, 500); // they make the ellipse have a slightly smaller movement range than the background, so it will be closer to the center than the mouse
  
  ellipse(circleX, circleY, 15, 15); // this draws the ellipse based on the circleX and circleY variables
  line(circleX, circleY, mouseX, mouseY); // this creates a line linking the two ellipses together
  ellipse(mouseX, mouseY, 10, 10); // this creates a second ellipse that follows the mouse directly
  
}