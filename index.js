let pen;
let button;
let clearbutton;
let slider;
let colorPicker;
let menuWidth = 120
let isSliderInteracted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  saveState();
  button = createButton('Save Art');
  button.position(30, windowHeight - 50);
  button.size(55, 20);
  button.style("font-family", "Helvetica");
  button.style("font-size", "10px");

  button.mousePressed(function(){
    let graphics = createGraphics(width-menuWidth, height);
    graphics.image(get(menuWidth, 0, width-menuWidth, height), 0, 0);
    saveCanvas(graphics,'myDrawing','png');
    });
  
  clearbutton = createButton('Clear Board');
  clearbutton.position(23, windowHeight - 90);
  clearbutton.mousePressed(clearBoard);
  clearbutton.size(70, 20);
  clearbutton.style("font-family", "Helvetica");
  clearbutton.style("font-size", "10px");
  
  slider = createSlider(0.5, 50, 1);
  slider.position(5, 125);
  slider.style("width", "100px");

  colorPicker = createColorPicker("#ffffff");
  colorPicker.position(35, 75);
}

function draw() {
  noStroke()
  fill(200);
  rect(0,0,120,windowHeight,0,20,20,0)
  
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

function clearBoard() {
  background(255);
}

function saveState(){
  previousState = get();
}
