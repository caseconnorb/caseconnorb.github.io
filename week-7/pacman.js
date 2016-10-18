function Pacman(canvX, canvY, pacmanDiameter) {

  this.canvasWidth = canvX;
  this.canvasHeight = canvY;

  this.pDiam = pacmanDiameter;
  this.pXPos = random(this.pDiam / 2, canvX - this.pDiam / 2); // position of pacman
  this.pYPos = random(this.pDiam / 2, canvY - this.pDiam / 2);
  this.startAngle = QUARTER_PI; // angle of pacman
  this.stopAngle = -QUARTER_PI;
  this.eyeX = -this.pDiam / 8; // pacman eye position
  this.eyeY = -this.pDiam / 4;

  this.pacXDirec = 1; // direction of movement
  this.pacYDirec = 0;
  this.pacSpeed = 1; // speed

  this.secTime = 0; // timer variables
  this.secTimeMax = 240; // 240 frames is four seconds
  this.timeGoal = random(this.secTimeMax + 1);
  this.dirCount = 0;

  this.startAngleChange = -1; // variables to move the mouth
  this.stopAngleChange = 1;
}

Pacman.prototype.drawPacman = function() {
  push();
  translate(this.pXPos, this.pYPos); // set pacman position
  fill('yellow'); // set pacman color
  arc(0, 0, this.pDiam, this.pDiam, this.startAngle, this.stopAngle, PIE); // make pacman based on variables
  fill(0);
  ellipse(this.eyeX, this.eyeY, this.pDiam / 6, this.pDiam / 6);
  pop();
}

Pacman.prototype.movePacman = function() {
  this.pXPos += this.pacXDirec * this.pacSpeed; //moves pacman based on direction and speed
  this.pYPos += this.pacYDirec * this.pacSpeed;
  this.wallCollision();
}

Pacman.prototype.northPacman = function() { // make pacman go north
  this.startAngle = -QUARTER_PI; // set angles for pacman direction
  this.stopAngle = PI + QUARTER_PI;
  this.eyeX = -this.pDiam / 4; // set position of eye
  this.eyeY = this.pDiam / 8;
  this.pacXDirec = 0; // set movement direction
  this.pacYDirec = -1;
  this.pacSpeed = random(1, 6);
}

Pacman.prototype.southPacman = function() { // make pacman go south
  this.startAngle = HALF_PI + QUARTER_PI;
  this.stopAngle = QUARTER_PI;
  this.eyeX = this.pDiam / 4;
  this.eyeY = -this.pDiam / 8;
  this.pacXDirec = 0;
  this.pacYDirec = 1;
  this.pacSpeed = random(1, 6);
}

Pacman.prototype.westPacman = function() { // make pacman go west
  this.startAngle = PI + QUARTER_PI;
  this.stopAngle = PI - QUARTER_PI;
  this.eyeX = this.pDiam / 8;
  this.eyeY = -this.pDiam / 4;
  this.pacXDirec = -1;
  this.pacYDirec = 0;
  this.pacSpeed = random(1, 6);
}

Pacman.prototype.eastPacman = function() { // make pacman go east
  this.startAngle = QUARTER_PI;
  this.stopAngle = -QUARTER_PI;
  this.eyeX = -this.pDiam / 8;
  this.eyeY = -this.pDiam / 4;
  this.pacXDirec = 1;
  this.pacYDirec = 0;
  this.pacSpeed = random(1, 6);
}

Pacman.prototype.timer = function() { // creates a timer
  if (this.secTime >= this.timeGoal) {
    this.changeDir(); // calls function when timer elapses
    this.secTime = 0; // resets timer
    this.timeGoal = random(0, this.secTimeMax + 1); // resetst random timer goal
  } else {
    this.secTime++; //increments timer
  }
}

Pacman.prototype.wallCollision = function() {
  if (this.pXPos >= this.canvasWidth - this.pDiam / 2) { // checks if passing edge
    this.stopMoving; // sets pacman direction to 0
    this.pXPos = this.canvasWidth - this.pDiam / 2; //prevents pacman from getting stuck past wall
  } else if (this.pXPos <= this.pDiam / 2) {
    this.stopMoving;
    this.pXPos = this.pDiam / 2;
  }
  if (this.pYPos >= this.canvasHeight - this.pDiam / 2) { // checks if passing edge
    this.stopMoving; // sets pacman direction to 0
    this.pYPos = this.canvasHeight - this.pDiam / 2; //prevents pacman from getting stuck past wall
  } else if (this.pYPos <= this.pDiam / 2) {
    this.stopMoving;
    this.pYPos = this.pDiam / 2;
  }
}

Pacman.prototype.stopMoving = function() { // stops pacman
  this.pacXDirec = 0;
  this.pacYDirec = 0;
}

Pacman.prototype.changeDir = function() {
  var newDirCount;

  do {
    newDirCount = floor(random(4)); // ensure pacman does not repeat direction
  } while (newDirCount == this.DirCount);

  this.DirCount = newDirCount;

  if (newDirCount === 0) { // use random variable to call function for new direction
    this.eastPacman();
  } else if (newDirCount === 1) {
    this.westPacman();
  } else if (newDirCount === 2) {
    this.northPacman();
  } else if (newDirCount === 3) {
    this.southPacman();
  }
}