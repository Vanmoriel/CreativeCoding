//drawn 1 times on loading
function setup() {
  createCanvas(500,500);
  background(100,100,100);
}

//drawn 60 times (more or less) per second (60fps)
function draw() {
 stroke(2);
 line(mouseX,mouseY, pmouseX, pmouseY);
}
