var ppt; //pixels per tile
var columns;
var rows;
var grid;

function setup() {
  // Create the canvas
  createCanvas(720, 720);
  ppt = 20;
  columns = floor(width/ppt);
  rows = floor(height/ppt);

  // 2D array board
  grid = new Array(columns);
  for(var i = 0; i < columns; i++){
    grid[i] = new Array(rows);
  }

  print("Test Print");


}

function draw(){
  background(200);

  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((grid[i][j] == 1)) fill(0);
      else fill(255);
      stroke(0);
      rect(i*ppt, j*ppt, ppt-1, ppt-1);
    }
  }
}
