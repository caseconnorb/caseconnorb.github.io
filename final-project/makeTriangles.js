function MakeTriangle(canvWidth, canvHeight) {
  this.trueFalse = [-1, 1]; //variable that can be 1 or -1, to be called

  this.canvLeftBound = -200; //variables for the boundaries outside the visible canvas
  this.canvRightBound = canvWidth + 200;
  this.canvTopBound = -200;
  this.canvBottomBound = canvHeight + 200;

  this.triangleX1 = random(canvWidth); //variables for the triangle points
  this.triangleY1 = random(canvHeight);
  this.triangleX2 = random(canvWidth);
  this.triangleY2 = random(canvHeight);
  this.triangleX3 = random(canvWidth);
  this.triangleY3 = random(canvHeight);

  this.triangleX1Change = random(-5, 6); //variables used to change the position of the triangle points
  this.triangleY1Change = random(-5, 6);
  this.triangleX2Change = random(-5, 6);
  this.triangleY2Change = random(-5, 6);
  this.triangleX3Change = random(-5, 6);
  this.triangleY3Change = random(-5, 6);

  this.rFill = random(256); // randomizes color fill
  this.gFill = random(256);
  this.bFill = random(256);

  this.rFillDirec = random(this.trueFalse); // used to change colors
  this.gFillDirec = random(this.trueFalse);
  this.bFillDirec = random(this.trueFalse);

  this.secTime = 0; // timer variables
  this.secTimeMax = 120;
  this.timeGoal = random(this.secTimeMax + 1);
}

MakeTriangle.prototype.drawShape = function() {
  push();
  noStroke();
  fill(this.rFill, this.gFill, this.bFill, 95); //fills triangle with the color variables
  triangle(this.triangleX1, this.triangleY1, this.triangleX2, this.triangleY2, this.triangleX3, this.triangleY3);
  pop();
}

MakeTriangle.prototype.changeSize = function() {


  this.triangleX1 += this.triangleX1Change; //changes point locations based on the change variables
  this.triangleY1 += this.triangleY1Change;
  this.triangleX2 += this.triangleX2Change;
  this.triangleY2 += this.triangleY2Change;
  this.triangleX3 += this.triangleX3Change;
  this.triangleY3 += this.triangleY3Change;

  this.boundaryCheck();
}

MakeTriangle.prototype.shapeChangeChange = function() {

  this.triangleX1Change += random(this.trueFalse); //randomly changes these variables by one in either direction
  this.triangleY1Change += random(this.trueFalse);
  this.triangleX2Change += random(this.trueFalse);
  this.triangleY2Change += random(this.trueFalse);
  this.triangleX3Change += random(this.trueFalse);
  this.triangleY3Change += random(this.trueFalse);
}

MakeTriangle.prototype.timer = function() { // creates a timer
  if (this.secTime >= this.timeGoal) {
    this.shapeChangeChange(); // calls function when timer elapses
    this.secTime = 0; // resets timer
    this.timeGoal = random(0, this.secTimeMax + 1); // resets random timer goal
  } else {
    this.secTime++; //increments timer
  }
}

MakeTriangle.prototype.boundaryCheck = function() { //ensures the triangles return to the scetch if they leave
  if (this.triangleX1 <= this.canvLeftBound && this.triangleX1Change < 0) {
    this.triangleX1Change = this.triangleX1Change * -1
  } else if (this.triangleX1 >= this.canvRightBound && this.triangleX1Change > 0) {
    this.triangleX1Change = this.triangleX1Change * -1
  }
  if (this.triangleY1 <= this.canvTopBound && this.triangleY1Change < 0) {
    this.triangleY1Change = this.triangleY1Change * -1
  } else if (this.triangleY1 >= this.canvBottomBound && this.triangleY1Change > 0) {
    this.triangleY1Change = this.triangleY1Change * -1
  }
  if (this.triangleX2 <= this.canvLeftBound && this.triangleX2Change < 0) {
    this.triangleX2Change = this.triangleX2Change * -1
  } else if (this.triangleX2 >= this.canvRightBound && this.triangleX2Change > 0) {
    this.triangleX2Change = this.triangleX2Change * -1
  }
  if (this.triangleY2 <= this.canvTopBound && this.triangleY2Change < 0) {
    this.triangleY2Change = this.triangleY2Change * -1
  } else if (this.triangleY2 >= this.canvBottomBound && this.triangleY2Change > 0) {
    this.triangleY2Change = this.triangleY2Change * -1
  }
  if (this.triangleX3 <= this.canvLeftBound && this.triangleX3Change < 0) {
    this.triangleX3Change = this.triangleX3Change * -1
  } else if (this.triangleX3 >= this.canvRightBound && this.triangleX3Change > 0) {
    this.triangleX3Change = this.triangleX3Change * -1
  }
  if (this.triangleY3 <= this.canvTopBound && this.triangleY3Change < 0) {
    this.triangleY3Change = this.triangleY3Change * -1
  } else if (this.triangleY3 >= this.canvBottomBound && this.triangleY3Change > 0) {
    this.triangleY3Change = this.triangleY3Change * -1
  }
}

MakeTriangle.prototype.changeColor = function() {
  this.rFill += this.rFillDirec; // increases color
  if (this.rFill >= 255 && this.rFillDirec > 0 || this.rFill <= 0 && this.rFillDirec < 0) {
    this.rFillDirec = this.rFillDirec * -1; // resets it to 0 if it gets to 255
  }
  this.gFill += this.gFillDirec; // increases color
  if (this.gFill >= 255 && this.gFillDirec > 0 || this.gFill <= 0 && this.gFillDirec < 0) {
    this.gFillDirec = this.gFillDirec * -1; // resets it to 0 if it gets to 255
  }
  this.bFill += this.bFillDirec; // increases color
  if (this.bFill >= 255 && this.gFillDirec > 0 || this.bFill <= 0 && this.gFillDirec < 0) {
    this.bFillDirec = this.bFillDirec * -1; // resets it to 0 if it gets to 255
  }
}

MakeTriangle.prototype.resizeWindow = function(canvWidth, canvHeight) {
  this.canvRightBound = canvWidth + 200; //resets the boundaries to canvas size if called
  this.canvBottomBound = canvHeight + 200;

}