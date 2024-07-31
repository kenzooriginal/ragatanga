function setup() {
    createCanvas(600, 600);
    background("grey")
  }
  
  function draw() {
     circle (350, 200, 100)
    stroke("white");
    fill("rgb(0,0,0)");
  
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  