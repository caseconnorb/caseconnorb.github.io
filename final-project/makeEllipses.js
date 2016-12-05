function MakeEllipse(canvWidth, canvHeight) {
  this.trueFalse = [-1, 1];

  this.canvLeftBound = -200;
  this.canvRightBound = canvWidth + 200;
  this.canvTopBound = -200;
  this.canvBottomBound = canvHeight + 200;

  this.ellipseX = random(canvWidth);
  this.ellipseY = random(canvHeight);
  this.ellipseWidth = random(canvWidth);
  this.ellipseHeight = random(canvHeight);

  this.ellipseXChange = random(-5, 6);
  this.ellipseYChange = random(-5, 6);
  this.ellipseWidthChange = random(-5, 6);
  this.ellipseHightChange = random(-5, 6);

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

MakeEllipse.prototype.drawEllipse = function() {
  push();
  ellipseMode(CENTER);
  fill(this.rFill, this.gFill, this.bFill);
  ellipse(this.ellipseX, this.ellipseY, this.ellipseWidth, this.ellipseHeight);
  pop();
}

MakeEllipse.prototype.changeESize = function() {

  this.ellipseX += this.ellipseXChange;
  this.ellipseY += this.ellipseYChange;
  this.ellipseWidth += this.ellipseWidthChange;
  this.ellipseHeight += this.ellipseHeightChange;

  this.boundaryCheck();
}

MakeEllipse.prototype.ellipseChangeChange = function() {

  this.ellipseXChange += random(this.trueFalse);
  this.ellipseYChange += random(this.trueFalse);
  this.ellipseWidth += random(this.trueFalse);
  this.ellipseHeight += random(this.trueFalse);
}

MakeEllipse.prototype.ellipseTimer = function() { // creates a timer
  if (this.secTime >= this.timeGoal) {
    this.ellipseChangeChange(); // calls function when timer elapses
    this.secTime = 0; // resets timer
    this.timeGoal = random(0, this.secTimeMax + 1); // resetst random timer goal
  } else {
    this.secTime++; //increments timer
  }
}

MakeEllipse.prototype.boundaryCheck = function() {
  if (this.ellipseX <= this.canvLeftBound && this.ellipseXChange < 0) {
    this.ellipseXChange = this.ellipseXChange * -1
  } else if (this.ellipseX >= this.canvRightBound && this.ellipseXChange > 0) {
    this.ellipseXChange = this.ellipseXChange * -1
  }
  if (this.ellipseY <= this.canvTopBound && this.ellipseYChange < 0) {
    this.ellipseYChange = this.ellipseYChange * -1
  } else if (this.ellipseY >= this.canvBottomBound && this.ellipseYChange > 0) {
    this.ellipseYChange = this.ellipseYChange * -1
  }
  // if (this.ellipseWidth <= this.canvLeftBound / 2 && this.ellipseWidthChange < 0) {
  //   this.ellipseWidthChange = this.ellipseWidthChange * -1
  // } else if (this.ellipseWidth >= this.canvRightBound / 2 && this.ellipseWidthChange > 0) {
  //   this.ellipseWidthChange = this.ellipseWidthChange * -1
  // }
  // if (this.ellipseHeight <= this.canvTopBound / 2 && this.ellipseHeightChange < 0) {
  //   this.ellipseHeightChange = this.ellipseHeightChange * -1
  // } else if (this.ellipseHeight >= this.canvBottomBound / 2 && this.ellipseHeightChange > 0) {
  //   this.ellipseHeightChange = this.ellipseHeightChange * -1
  // }
}

MakeEllipse.prototype.changeEColor = function() {
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