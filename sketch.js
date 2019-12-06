let x = 1;
let y = 1;
let easing = 0.3;
// let originColor = color('rgba(255, 255, 255, 0.2)');

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  fill(color('rgba(100%, 100%, 100%, 0.5)'));
  ellipse(x, y, 35, 35);

  //add hover effect on cursor
}
