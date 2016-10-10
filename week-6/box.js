function Box(bXPos, bYPos, bWidth, bHeight) {
  this.trueFalse = [-1, 1];

  this.canvasWidth = bXPos;
  this.canvasHeight = bYPos;

  this.w = bWidth; // variables for the main box
  this.h = bHeight;
  this.x = random(bWidth / 2, bXPos - bWidth / 2); // x and y starting position is random
  this.y = random(bHeight / 2, bYPos - bHeight / 2); // boxes cannot start past the edge of canvas
  this.xMove = random(this.trueFalse);
  this.yMove = random(this.trueFalse);
  this.speed = random(1, 6);

  this.rFill = random(256); // randomizes color fill
  this.gFill = random(256);
  this.bFill = random(256);
  this.rFillDirec = random(this.trueFalse); // used to change colors
  this.gFillDirec = random(this.trueFalse);
  this.bFillDirec = random(this.trueFalse);

  this.miniBWidth = bWidth / 2; // variables for the smaller box
  this.miniBHeight = bHeight / 2;
  this.miniBWidthChange = random(this.trueFalse); // used to change size of small box
  this.miniBHeightChange = random(this.trueFalse);
  this.miniRFill = abs(this.rFill - 128); // new color fill based on previous one
  this.miniGFill = abs(this.gFill - 128);
  this.miniBFill = abs(this.bFill - 128);

}

Box.prototype.drawBox = function() {
  push();
  rectMode(CENTER);
  stroke(0);
  fill(this.rFill, this.gFill, this.bFill); // fill first box
  translate(this.x, this.y); // move box to location
  rect(0, 0, this.w, this.h); // makes a box
  fill(this.miniRFill, this.miniGFill, this.miniBFill); // fill second box
  rect(0, 0, this.miniBWidth, this.miniBHeight); // makes a smaller box in the box
  pop();
}

Box.prototype.colorChange = function() {
  this.rFill += this.rFillDirec; // increases color
  if (this.rFill >= 255 || this.rFill <= 0) {
    this.rFillDirec = this.rFillDirec * -1; // resets it to 0 if it gets to 255
  }
  this.gFill += this.gFillDirec; // increases color
  if (this.gFill >= 255 || this.gFill <= 0) {
    this.gFillDirec = this.gFillDirec * -1; // resets it to 0 if it gets to 255
  }
  this.bFill += this.bFillDirec; // increases color
  if (this.bFill >= 255 || this.bFill <= 0) {
    this.bFillDirec = this.bFillDirec * -1; // resets it to 0 if it gets to 255
  }
  this.miniRFill = abs(this.rFill - 128); // modifies internal colors based on external ones
  this.miniGFill = abs(this.gFill - 128);
  this.miniBFill = abs(this.bFill - 128);
}

Box.prototype.sizeChange = function() {
  this.miniBWidth += this.miniBWidthChange; // makes small boxes change size inside larger ones
  if (this.miniBWidth >= this.w || this.miniBWidth <= 0) {
    this.miniBWidthChange = this.miniBWidthChange * -1;
  }
  this.miniBHeight += this.miniBHeightChange;
  if (this.miniBHeight >= this.h || this.miniBHeight <= 0) {
    this.miniBHeightChange = this.miniBHeightChange * -1;
  }
}

Box.prototype.move = function() {
  this.x += this.xMove * this.speed; // gives the boxes direction and speed
  this.y += this.yMove * this.speed;
  if (this.x <= this.w / 2) { // these if statements make the boxes bounce
    this.xMove = 1;
    this.speed = random(1, 6);
  } else if (this.x >= this.canvasWidth - this.w / 2) {
    this.xMove = -1;
    this.speed = random(1, 6);
  }
  if (this.y <= this.h / 2) {
    this.yMove = 1;
    this.speed = random(1, 6);
  } else if (this.y >= this.canvasHeight - this.h / 2) {
    this.yMove = -1;
    this.speed = random(1, 6);
  }
}