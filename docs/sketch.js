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
var section;//array of strings with names of sections for store color coding


function setup() {
  w = Math.min($("#content").height(), $("#content").width());//width
  h = w;//height
  side = 150; //Sidebar for selection
  colorAmount = 10;
  section = new Array(colorAmount);
  selectionNum=0;
  /////////////
  section[0]="Hallway";
  section[1]="Entrance";
  section[2]="Aisle 1";
  section[3]="Aisle 2";
  section[4]="Aisle 3";
  section[5]="Aisle 4";
  section[6]="Deli";
  section[7]="Bakery";
  section[8]="Produce";
  section[9]="Wall";

  /////////////
  currentColor = color(255,255,255,255);
  // Create the canvas
  var canvas = createCanvas(w+side, h);
	canvas.parent('content');

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
  // Color selection
  selection = new Array(colorAmount);
  selection[0]=color(255,255,255);
  selection[1]=color(170, 255, 195);
  selection[2]=color(0, 130, 200);
  selection[3]=color(245, 130, 48);
  selection[4]=color(145, 30, 180);
  selection[5]=color(70, 240, 240);
  selection[6]=color(250, 190, 190);
  selection[7]=color(255, 215, 180);
  selection[8]=color(60, 180, 75);
  selection[9]=color(128, 0, 0);

  /*
  for(var i = 1; i < colorAmount; i++){
    selection[i] = color(random(255),random(255),random(255));
  }
  */
}


function draw(){
  background(148, 176, 1, 10);
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
      stroke(200);
    }else{
      stroke(0);
    }
    // Labels for colors
    text(section[i], w+(.25*side)+ppt+5,  ppt*5+i*ppt+10);
    rect( w+(.25*side),  ppt*5+i*ppt   , ppt-1 , ppt-1 )
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
    case 13:
      printMapData();
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
      print(grid[i][j]);
    }
  }
}
