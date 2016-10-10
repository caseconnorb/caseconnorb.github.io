var boxes = []; // empty array to store the boxes
var bGVal = 255;
var bGDirec = 1;

function setup() {
  createCanvas(800, 400);

  for (var i = 0; i < 30; i++) {
    boxes[i] = new Box(width, height, 50, 50);
  }
}

function draw() {
  backgroundMod();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].drawBox();
    boxes[i].colorChange();
    boxes[i].sizeChange();
    boxes[i].move();
  }
}

function backgroundMod() { // this makes the background fade from white to black and back
  bGVal += bGDirec;
  background(bGVal);
  if (bGVal > 255 || bGVal < 0) {
    bGDirec = bGDirec * -1;
  }
}