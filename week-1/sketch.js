function setup() {
  createCanvas(800, 600);
  background(170, 140, 255);
}

function draw() {
  
  // floor
  rectMode(CENTER);
  fill(110, 100, 70);
  rect(400, 550, 800, 200);
  
  // right shoe of dude
  fill(0);
  rect(362, 485, 70, 25, 50, 5, 5, 5);
  
  // left shoe of dude
  rect(438, 485, 70, 25, 5, 50, 5, 5);
  
  // dude's neck  
  fill(230, 210, 140);
  stroke(220, 180, 90);
  rect(400, 200, 20, 40);
  
  // this is the face of my dude
  fill(230, 210, 140);
  stroke(220, 180, 90);
  ellipse(400, 150, 100);
  
  // dude's hands
  ellipse(330, 341, 25);
  ellipse(470, 341, 25);
  
  // these make up the eyes
  fill(255);
  stroke(0);
  ellipse(384, 140, 20);
  ellipse(416, 140, 20);
  fill(0);
  noStroke();
  ellipse(384, 140, 8);
  ellipse(416, 140, 8);
  
  // this arc makes up the mouth
  noFill();
  stroke(0);
  arc(400, 170, 50, 25, 0, PI);

  // dude's right arm
  fill(50, 50, 50);
  quad(340, 215, 370, 212, 345, 340, 315, 337);
  
  // dude's left arm
  quad(430, 212, 460, 215, 485, 337, 455, 340);
  
  // dude's right leg
  rect(375, 415, 45, 120);
  
  // dude's left leg
  rect(425, 415, 45, 120);
  
  // base of dude's suit
  rect(400, 285, 100, 150);

  // hat top
  arc(400, 104, 60, 40, PI, 0);
  
  // hat brim
  rect(400, 110, 85, 15, 10, 10, 10, 10);
  
  // suit opening
  fill(255);
  triangle(380, 211, 420, 211, 400, 270);
  
  // super simple bowtie
  fill(0);
  triangle(385, 206, 385, 218, 400, 212);
  triangle(415, 206, 415, 218, 400, 212);
  
  // line for suit
  line(400, 270, 400, 360)
  
}