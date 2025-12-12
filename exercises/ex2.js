
let color = 100
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
        if (mouseIsPressed) {
//press any number from 1-9 to stop the brush, click without moving the mouse for one brush spot
          
  //press the mouse to draw the crossword puzzle pieces
  stroke(220, 420, 900);
    fill (random (120), random (200));
  rect(mouseX, mouseY, 55);
        }
  //press 0 for drawing lines from the right down corner
  //press the mouse to hold the rectangles on the lines
    if (key == "0"){
  line(900, 900, mouseX, mouseY);
  } 
    //press a for the letter A
    else if (key == "a"){
     textSize(32);
  fill(color, 400, 300);
  stroke(0);
  text('A', mouseX, mouseY);
  } 
    //press b for the letter B
    else if (key == "b"){
     textSize(32);
  fill(200, 440, 800);
  stroke(0);
  text('B', mouseX, mouseY);
  } 
    //press c for the letter C
    else if (key == "c"){
     textSize(32);
  fill(200, 200, 450);
  stroke(0);
  text('C', mouseX, mouseY);
  } 
    //press d for the letter D
    else if (key == "d"){
     textSize(32);
  fill(color, 800, 200);
  stroke(0);
  text('D', mouseX, mouseY);
  } 
    //press e for the letter E
    else if (key == "e"){
     textSize(32);
  fill(230, 20, 120);
  stroke(0);
  text('E', mouseX, mouseY);
  } 
    //press f for the letter F
    else if (key == "f"){
     textSize(32);
  fill(60, 20, 90);
  stroke(0);
  text('F', mouseX, mouseY);
  } 
    //press g for the letter G
    else if (key == "g"){
     textSize(32);
  fill(600, 200, 200);
  stroke(0);
  text('G', mouseX, mouseY);
  } 
    //press h for the letter H
    else if (key == "h"){
     textSize(32);
  fill(color, 500, 10);
  stroke(0);
  text('H', mouseX, mouseY);
  } 
    //press i for the letter I
    else if (key == "i"){
     textSize(32);
  fill(300, 50, 400);
  stroke(0);
  text('I', mouseX, mouseY);
  } 
    //press j for the letter J
    else if (key == "j"){
     textSize(32);
  fill(200, 600, 200);
  stroke(0);
  text('J', mouseX, mouseY);
  } 
    //press k for the letter K
    else if (key == "k"){
     textSize(32);
  fill(900, color, 40);
  stroke(0);
  text('K', mouseX, mouseY);
  } 
    //press l for the letter L
    else if (key == "l"){
     textSize(32);
  fill(color, 300, 600);
  stroke(0);
  text('L', mouseX, mouseY);
  } 
    //press m for the letter M
    else if (key == "m"){
     textSize(32);
  fill(400, 40, 90);
  stroke(0);
  text('M', mouseX, mouseY);
  } 
    //press n for the letter N
    else if (key == "n"){
     textSize(32);
  fill(color, 500, 180);
  stroke(0);
  text('N', mouseX, mouseY);
  } 
    //press o for the letter O
    else if (key == "o"){
     textSize(32);
  fill(600, 300, color);
  stroke(0);
  text('O', mouseX, mouseY);
  } 
    //press p for the letter P
    else if (key == "p"){
     textSize(32);
  fill(720, 600, 30);
  stroke(0);
  text('P', mouseX, mouseY);
  } 
    //press q for the letter Q
    else if (key == "q"){
     textSize(32);
  fill(120, 800, 200);
  stroke(0);
  text('Q', mouseX, mouseY);
  } 
    //press r for the letter R
    else if (key == "r"){
     textSize(32);
  fill(color, 700, 500);
  stroke(0);
  text('R', mouseX, mouseY);
  } 
    //press s for the letter S
    else if (key == "s"){
     textSize(32);
  fill(400, 200, 400);
  stroke(0);
  text('S', mouseX, mouseY);
  } 
    //press t for the letter T
    else if (key == "t"){
     textSize(32);
  fill(color, color, 600);
  stroke(0);
  text('T', mouseX, mouseY);
  } 
    //press u for the letter U
    else if (key == "u"){
     textSize(32);
  fill(200, 200, 300);
  stroke(0);
  text('U', mouseX, mouseY);
  } 
    //press v for the letter V
    else if (key == "v"){
     textSize(32);
  fill(900, 600, 200);
  stroke(0);
  text('V', mouseX, mouseY);
  } 
    //press w for the letter W
    else if (key == "w"){
     textSize(32);
  fill(200, 440, 500);
  stroke(0);
  text('W', mouseX, mouseY);
  } 
    //press x for the letter X
    else if (key == "x"){
     textSize(32);
  fill(300, 190, 200);
  stroke(0);
  text('X', mouseX, mouseY);
  } 
    //press y for the letter Y
    else if (key == "y"){
     textSize(32);
  fill(400, 700, 700);
  stroke(0);
  text('Y', mouseX, mouseY);
  } 
    //press z for the letter Z
    else if (key == "z"){
     textSize(32);
  fill(90, 160, 40);
  stroke(0);
  text('Z', mouseX, mouseY);
  } 
  rectX = rect + 1;

}