var quads = [];
var ellipses = [];

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 10; i++) {
    quads[i] = new MakeQuad(windowWidth, windowHeight);
  }
  for (var j = 0; j < 10; j++) {
    ellipses[j] = new MakeEllipse(windowWidth, windowHeight);
  }

}

function draw() {
  background(200);

  for (var i = 0; i < quads.length; i++) {
    quads[i].drawQuad();
    quads[i].changeQSize();
    quads[i].quadTimer();
    quads[i].changeQColor();
  }
  for (var j = 0; j < ellipses.length; j++) {
    ellipses[j].drawEllipse();
    ellipses[j].changeESize();
    ellipses[j].ellipseTimer();
    ellipses[j].changeEColor();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}