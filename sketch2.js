
//drawn 1 times on loading
function setup() {
  createCanvas(500,500);
}

//drawn 60 times (more or less) per second (60fps)
function draw() {
  
  //Let's try to draw.
  background(0,0,0);
  /*
  strokeWeight(5);
  stroke(200,0,0);
  line(50,50,100,100);
  
  strokeWeight(7);
  fill(255,0,0,50);
  noStroke();
  rect(200,200,200,100);
  
  strokeWeight(3);
  stroke(0,100,50);
  noFill();
  ellipse(250,250,200,50); //---> center coordinates, lenght, height.
  
  //Analyze the order of drawing
  fill(200,0,0)
  rect(5,5,100,100);
  fill(0,200,0);
  rect(10,80,50,50);
  fill(0,0,200);
  rect(60,60,80,80);
  
  //get the sketch size
  ellipse(width/2, height/2, 100,100);  */
  
  //get mouse coordinates
  ellipse(mouseX/2, mouseY/2,100,100);
  
}