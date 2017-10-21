var ppt; //pixels per tile
var columns;
var rows;
var grid;
var w;
var h;
var side;
var selection;//color array
var colorAmount;

function setup() {
  w=720;//width
  h=720;//height
  side = 240; //Sidebar for selection
  colorAmount = 20;

  // Create the canvas
  createCanvas(w+side, h);

  ppt = 15;
  columns = floor(w/ppt);
  rows = floor(h/ppt);

  // 2D array board
  grid = new Array(columns);
  for(var i = 0; i < columns; i++){
    grid[i] = new Array(rows);
  }

  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j]=0;
    }
  }

  selection = new Array(colorAmount);
  for(var i = 0; i < colorAmount; i++){
    selection[i] = color(random(255),random(255),random(255));
  }
}

function draw(){
  background(200);
  //Selection Grid
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((grid[i][j] == 1)) fill(0);
      else fill(255);
      stroke(0);
      rect(i*ppt, j*ppt, ppt-1, ppt-1);
    }
  }

  //Color choices
  for(var i = 0; i < colorAmount; i++){
    fill(selection[i]);
    stroke(0);
    rect( w+(.5*side),  ppt*5+i*ppt   , ppt-1 , ppt-1 )
  }
}

function mouseDragged(){
  print("Clicked");
  print("MouseX: ", mouseX, " MouseY: ", mouseY);
  x = floor(mouseX/ppt);
  y = floor(mouseY/ppt);
  print("gridX: ", x, " gridY: ", y);
  grid[x][y]=1;

}
