function MakeQuad(canvWidth, canvHeight) {
  this.trueFalse = [-1, 1];

  this.canvLeftBound = -200;
  this.canvRightBound = canvWidth + 200;
  this.canvTopBound = -200;
  this.canvBottomBound = canvHeight + 200;

  // this.quadX = [random(canvWidth), random(canvWidth), random(canvWidth), random(canvWidth)];
  // this.quadY = [random(canvHeight), random(canvHeight), random(canvHeight), random(canvHeight)];

  this.quadX1 = random(canvWidth);
  this.quadY1 = random(canvHeight);
  this.quadX2 = random(canvWidth);
  this.quadY2 = random(canvHeight);
  this.quadX3 = random(canvWidth);
  this.quadY3 = random(canvHeight);
  this.quadX4 = random(canvWidth);
  this.quadY4 = random(canvHeight);

  // this.quadXChange = [random(-5, 6), random(-5, 6), random(-5, 6), random(-5, 6)];
  // this.quadYChange = [random(-5, 6), random(-5, 6), random(-5, 6), random(-5, 6)];

  this.quadX1Change = random(-5, 6);
  this.quadY1Change = random(-5, 6);
  this.quadX2Change = random(-5, 6);
  this.quadY2Change = random(-5, 6);
  this.quadX3Change = random(-5, 6);
  this.quadY3Change = random(-5, 6);
  this.quadX4Change = random(-5, 6);
  this.quadY4Change = random(-5, 6);

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

MakeQuad.prototype.drawQuad = function() {
  push();
  fill(this.rFill, this.gFill, this.bFill);
  quad(this.quadX1, this.quadY1, this.quadX2, this.quadY2, this.quadX3, this.quadY3, this.quadX4, this.quadY4);
  pop();
}

MakeQuad.prototype.changeQSize = function() {

  // for (var i = 0; i <= this.quadX.length; i++) {
  //   this.quadX[i] += this.quadXChange[i];
  // }

  // for (var j = 0; j <= this.quadY.length; j++) {
  //   this.quadY[j] += this.quadYChange[j];
  // }

  this.quadX1 += this.quadX1Change;
  this.quadY1 += this.quadY1Change;
  this.quadX2 += this.quadX2Change;
  this.quadY2 += this.quadY2Change;
  this.quadX3 += this.quadX3Change;
  this.quadY3 += this.quadY3Change;
  this.quadX4 += this.quadX4Change;
  this.quadY4 += this.quadY4Change;

  this.boundaryCheck();
}

MakeQuad.prototype.quadChangeChange = function() {

  // for (var i = 0; i <= this.quadXChange.length; i++) {
  //   this.quadXChange[i] += random(this.trueFalse);
  // }

  // for (var j = 0; j <= this.quadYChange.length; j++) {
  //   this.quadYChange[j] += random(this.trueFalse);
  // }


  this.quadX1Change += random(this.trueFalse);
  this.quadY1Change += random(this.trueFalse);
  this.quadX2Change += random(this.trueFalse);
  this.quadY2Change += random(this.trueFalse);
  this.quadX3Change += random(this.trueFalse);
  this.quadY3Change += random(this.trueFalse);
  this.quadX4Change += random(this.trueFalse);
  this.quadY4Change += random(this.trueFalse);
}

MakeQuad.prototype.quadTimer = function() { // creates a timer
  if (this.secTime >= this.timeGoal) {
    this.quadChangeChange(); // calls function when timer elapses
    this.secTime = 0; // resets timer
    this.timeGoal = random(0, this.secTimeMax + 1); // resetst random timer goal
  } else {
    this.secTime++; //increments timer
  }
}

MakeQuad.prototype.boundaryCheck = function() {
  if (this.quadX1 <= this.canvLeftBound && this.quadX1Change < 0) {
    this.quadX1Change = this.quadX1Change * -1
  } else if (this.quadX1 >= this.canvRightBound && this.quadX1Change > 0) {
    this.quadX1Change = this.quadX1Change * -1
  }
  if (this.quadY1 <= this.canvTopBound && this.quadY1Change < 0) {
    this.quadY1Change = this.quadY1Change * -1
  } else if (this.quadY1 >= this.canvBottomBound && this.quadY1Change > 0) {
    this.quadY1Change = this.quadY1Change * -1
  }
  if (this.quadX2 <= this.canvLeftBound && this.quadX2Change < 0) {
    this.quadX2Change = this.quadX2Change * -1
  } else if (this.quadX2 >= this.canvRightBound && this.quadX2Change > 0) {
    this.quadX2Change = this.quadX2Change * -1
  }
  if (this.quadY2 <= this.canvTopBound && this.quadY2Change < 0) {
    this.quadY2Change = this.quadY2Change * -1
  } else if (this.quadY2 >= this.canvBottomBound && this.quadY2Change > 0) {
    this.quadY2Change = this.quadY2Change * -1
  }
  if (this.quadX3 <= this.canvLeftBound && this.quadX3Change < 0) {
    this.quadX3Change = this.quadX3Change * -1
  } else if (this.quadX3 >= this.canvRightBound && this.quadX3Change > 0) {
    this.quadX3Change = this.quadX3Change * -1
  }
  if (this.quadY3 <= this.canvTopBound && this.quadY3Change < 0) {
    this.quadY3Change = this.quadY3Change * -1
  } else if (this.quadY3 >= this.canvBottomBound && this.quadY3Change > 0) {
    this.quadY3Change = this.quadY3Change * -1
  }
  if (this.quadX4 <= this.canvLeftBound && this.quadX4Change < 0) {
    this.quadX4Change = this.quadX4Change * -1
  } else if (this.quadX4 >= this.canvRightBound && this.quadX4Change > 0) {
    this.quadX4Change = this.quadX4Change * -1
  }
  if (this.quadY4 <= this.canvTopBound && this.quadY4Change < 0) {
    this.quadY4Change = this.quadY4Change * -1
  } else if (this.quadY4 >= this.canvBottomBound && this.quadY4Change > 0) {
    this.quadY4Change = this.quadY4Change * -1
  }
}

MakeQuad.prototype.changeQColor = function() {
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