
//DISCONTINUED
//possibly forever

var ppt; //pixels per tile
var columns;
var rows;
var grid;
var w;
var h;
var colorAmount;
var mapData;

function preload(){
  mapData = loadJSON("map.json");
}

function setup() {
  print("MAP DATA: ",mapData);
  //importMapData();
  //printMapData();

  w=720;//width
  h=720;//height
  colorAmount = 10;
  currentColor = color(255,255,255,255);
  selectionNum=0;
  // Create the canvas
  createCanvas(w, h);

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

}

function printMapData(){
  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      print(i," ",j,": ",grid[i][j]);
    }
  }
}

function importMapData(){
  var count = 0;
  print("Map Data: ", mapData);

  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j]=mapData[count];
      count++;
    }
  }
}
