function setup() {
  createCanvas(1000, 400);
  background(255, 0, 0);
}

function draw() {
  
  // this is a rectangle
  stroke(0);
  fill(100, 100, 0);
  rect(50, 100, 100, 70);
  
  // this is a triangle
  // noStroke();
  // fill(0, 0, 200, 98);
  // triangle(50, 50, 100, 100, 50, 200);
  
  // this is a circle
  // ellipseMode(CORNER);
  fill(50, 0, 200, 98);
  ellipse(50, 100, 100, 100);

  fill(200, 100, 100, 99);
  ellipse(50, 100, 50, 10);
  
  stroke(255);
  line(50, 100, 1000, 0);
  line(1000, 0, 0, 400);
  
}