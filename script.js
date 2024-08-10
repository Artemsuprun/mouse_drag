//  File Name: script.js
//  Author: Artem Suprun
//  Date: 06/14/2022
//  Summary: A JS script file for the rain folder, which runs a
//  program on the javascript canvas.
//

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
let w, h;
let mx1, my1, mx2, my2;
let down = false;

// background function
const background = (color) => {
  ctx.fillStyle = color;
  ctx.fillRect(-w, -h, w*2, h*2);
}

// setSize(), set canvas size;
function setSize(x, y) {
  ctx.canvas.width = x;
  ctx.canvas.height = y;
  w = x;
  h = y;
}

// drag()
function drag() {
  ctx.beginPath();
  ctx.lineWidth = "5";
  ctx.strokeStyle = "white";
  ctx.rect(mx1, my1, mx2, my2);
  ctx.stroke();
}
// Helper function for drag()
canvas.addEventListener("mousemove", mouseEvent);
canvas.addEventListener("mousedown", mouseEvent);
canvas.addEventListener("mouseup", mouseEvent);
function mouseEvent(e) {
  let bounds = canvas.getBoundingClientRect();
  if (event.type === "mousedown") {
    mx1 = e.pageX - bounds.left - w/2;
    my1 = e.pageY - bounds.top - h/2;
    mx2 = 0;
    my2 = 0;
    down = true;
  } else if (event.type === "mouseup") {
    mx2 = e.pageX - bounds.left - w/2 - mx1;
    my2 = e.pageY - bounds.top - h/2 - my1;
    down = false;
  }
  if (down === true) {
    mx2 = e.pageX - bounds.left - w/2 - mx1;
    my2 = e.pageY - bounds.top - h/2 - my1;
  }
}

// Setup
function setup() {
  setSize(500, 500);
  ctx.translate(w/2, h/2);
}

// Draw
function draw() {
  background("black")
  drag();
}

// The main output
setup();
var interval = setInterval(draw, 10);
