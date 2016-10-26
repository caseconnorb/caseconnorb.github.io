var pacmen = [];

function setup() {
  frameRate(60);
  createCanvas(800, 400);

  for (var i = 0; i < 10; i++) {
    pacmen[i] = new Pacman(width, height, 75);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < pacmen.length; i++) {
    pacmen[i].drawPacman();
    pacmen[i].movePacman();
    pacmen[i].timer();
  }
  pacmanCollide();
}

function pacmanCollide() {
  var pacmanX = 0;
  var pacmanY = 0;
  var pacmanDistance = 0;
  var pacmanXDirection = 0;
  var pacmanYDirection = 0;
  var pacmanDiam = 0;

  for (var i = 0; i < pacmen.length; i++) {
    pacmanX = pacmen[i].pXPos; // sets the variables individually for each pacman
    pacmanY = pacmen[i].pYPos;
    pacmanXDirection = pacmen[i].pacXDirec;
    pacmanYDirection = pacmen[i].pacYDirec;
    pacmanDiam = pacmen[i].pDiam;

    for (var j = 0; j < pacmen.length; j++) {
      pacmanDistance = dist(pacmanX, pacmanY, pacmen[j].pXPos, pacmen[j].pYPos);
      if (pacmanDistance <= pacmanDiam && pacmen[j].pXPos > pacmanX && pacmanXDirection == 1) {
        pacmen[i].stopMoving(); // pacman stops if it collides with another pacman that is to the right of it and it is moving east
        pacmen[i].pXPos = pacmanX - (pacmanDiam - pacmanDistance); // prevents the pacmen from overlapping
      } else if (pacmanDistance <= pacmanDiam && pacmen[j].pXPos < pacmanX && pacmanXDirection == -1) {
        pacmen[i].stopMoving(); // pacman stops if it collides with another pacman that is to the left of it and it is moving west
        pacmen[i].pXPos = pacmanX + (pacmanDiam - pacmanDistance);
      } else if (pacmanDistance <= pacmanDiam && pacmen[j].pYPos > pacmanY && pacmanYDirection == 1) {
        pacmen[i].stopMoving(); // pacman stops if it collides with another pacman that is below it and it is moving down
        pacmen[i].pYPos = pacmanY - (pacmanDiam - pacmanDistance);
      } else if (pacmanDistance <= pacmanDiam && pacmen[j].pYPos < pacmanY && pacmanYDirection == -1) {
        pacmen[i].stopMoving(); //nDistance <= pacman stops if it collides with another pacman that is above it and it is moving up
        pacmen[i].pYPos = pacmanY + (pacmanDiam - pacmanDistance);
      }
    }

  }
}