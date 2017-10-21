var ppt; //pixels per tile
var columns;
var rows;
var grid;
var w;
var h;
var side;
var selection;//color array
var colorAmount;
var currentColor;
var selectionNum;//Num of currently selected color

function setup() {
  w=720;//width
  h=720;//height
  side = 240; //Sidebar for selection
  colorAmount = 10;
  currentColor = color(255,255,255,255);
  selectionNum=0;
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
  selection[0]=color(255,255,255);
  for(var i = 1; i < colorAmount; i++){
    selection[i] = color(random(255),random(255),random(255));
  }
}

function draw(){
  background(200);
  //Selection Grid
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      //print("GridCOlorinDraw: ", grid[i][j]);
      fill(selection[grid[i][j]]);
      //print("GRID: ", grid[i][j]);
      stroke(0);
      rect(i*ppt, j*ppt, ppt-1, ppt-1);
    }
  }

  //Color choices
  for(var i = 0; i < colorAmount; i++){
    fill(selection[i]);
    if(i==selectionNum){
      stroke(255,255,255);
    }else{
      stroke(0);
    }

    rect( w+(.5*side),  ppt*5+i*ppt   , ppt-1 , ppt-1 )
  }
}

//Key press for color selection
function keyPressed(){
  switch(keyCode){
    case 49:
      selectionNum=0;
      break;
    case 50:
      selectionNum=1;
      break;
    case 51:
      selectionNum=2;
      break;
    case 52:
      selectionNum=3;
      break;
    case 53:
      selectionNum=4;
      break;
    case 54:
      selectionNum=5;
      break;
    case 55:
      selectionNum=6;
      break;
    case 56:
      selectionNum=7;
      break;
    case 57:
      selectionNum=8;
      break;
    case 48:
      selectionNum=9;
      break;
    case 13:
      printMapData();
      break;
    case 16:
      exportMapData();
      break;
  }
  currentColor = selection[selectionNum];
  print("Selection = ", selectionNum);
  print("Selected Color: ", currentColor);
}

//Paint on Map
function mouseDragged(){
  print("Clicked");
  print("MouseX: ", mouseX, " MouseY: ", mouseY);
  x = floor(mouseX/ppt);
  y = floor(mouseY/ppt);
  print("gridX: ", x, " gridY: ", y);
  grid[x][y]=selectionNum;
  print("Grid Color: ",grid[x][y]);
}

function printMapData(){
  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      print(i," ",j,": ",grid[i][j]);
    }
  }
}

function exportMapData(){
  saveStrings(grid,'map.txt');
}
