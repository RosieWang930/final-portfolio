let x = 1;
let y = 1;
let a = 35;
let b = 35;
let easing = 0.3;
let targetX, targetY, dx, dy;
// let cursorChange, oneCursorClick;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();
  cursorOnWeb();
  fill(color('rgba(100%, 100%, 100%, 0.5)'));
  // cursorChange = selectAll('#clickable');
  // for (let i = 0; i < cursorChange.length; i++) {
  //   oneCursorClick = cursorChange[i];
  //   console.log("oneCursorClick");
  //   oneCursorClick.mouseOver(clickCursor(oneCursorClick));
  // }


}

function cursorOnWeb() {
  targetX = mouseX;
  dx = targetX - x;
  x += dx * easing;

  targetY = mouseY;
  dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, a, b);
}


//add hover effect on cursor: failed
// function clickCursor(a) {
//   var returnfunction = function(event){
//     ellipse(x, y, 50, 50);
//   }
//   return returnfunction;
// }
