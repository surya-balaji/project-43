var hr, mn, sc
var hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(800,400);

  hr = hour();
  mn = minute();
  sc = second();
  
  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  angleMode(DEGREES);
 
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,400,100);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line(400,200,400,125);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(13);
  line(400,200,400,150);
  pop();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}