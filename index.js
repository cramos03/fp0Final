let pen;
let button;
let clearbutton;
let slider;
let colorPicker;
let isSliderInteracted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  button = createButton('Save Art');
  button.position(40, windowHeight - 50);
  button.mousePressed(saveArt);
  button.size(85, 25);
  button.style("font-family", "Helvetica");
  button.style("font-size", "15px");

  clearbutton = createButton('Clear Board');
  clearbutton.position(25, windowHeight - 90);
  clearbutton.mousePressed(clearBoard);
  clearbutton.size(110, 25);
  clearbutton.style("font-family", "Helvetica");
  clearbutton.style("font-size", "15px");
  
  slider = createSlider(0.5, 50, 1);
  slider.position(20, 125);
  slider.style("width", "100px");

  colorPicker = createColorPicker("#ffffff");
  colorPicker.position(50, 75);
}

function draw() {
  noStroke()
  fill(200);
  rect(0,0,150,windowHeight,0,20,20,0)
  let weight = slider.value();

  if (!isSliderInteracted && mouseIsPressed) {
    stroke(pen);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
    pen = colorPicker.color();
  
}

function mouseDragged() {
  if (mouseX >= slider.x && mouseX <= slider.x + slider.width && mouseY >= slider.y && mouseY <= slider.y + slider.height) {
    isSliderInteracted = true;
  }
}

function mouseReleased() {
  isSliderInteracted = false;
}

function saveArt() {
  saveCanvas('mycanvas',"png");
}

function clearBoard() {
  background(255);
}