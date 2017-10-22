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
  w =525;//width
  h = 525;//height
  side = 150; //Sidebar for selection
  colorAmount = 10;
  section = new Array(colorAmount+1);// +1 is a hidden color saved for items
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
	canvas.parent('map');

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
  selection[10]=color(255,255,25); //item color

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
    textSize(18);
    rect( w+(.25*side),  ppt*5+i*ppt*2   , ppt*7 , ppt*2 )
    fill(0);
    text(section[i], w+(.25*side)+ppt+5,  ppt*5+i*ppt*2+20);
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
    case 187:
      loadDemoMap();
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


function getItems(sec){
  var aisleLocations = new Array(2);
  aisleLocations[0] = []; // X cord
  aisleLocations[1] = []; // Y cord


  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      var type = determineType(i,j);
      if(type == sec){
        aisleLocations[0].push(i);
        aisleLocations[1].push(j);
      }
    }
  }

  var temp = random(aisleLocations.length);
  grid[aisleLocations[0][temp]][aisleLocations[1][temp]] = 10;//Yellow

}

function determineType(x,y){
  switch(grid[x][y]){
    case 0:
      break;
    case 1:
      break;
    case 2:
      return '1';
    case 3:
      return '2';
    case 4:
      return '3';
    case 5:
      return '4';
    case 6:
      return 'd';
    case 7:
      return 'b';
    case 8:
      return 'p';
    case 9:
      break;
  }
  print("An error has occured if the code has reached this print statement, i am dearly sorry");
}


function itemSquare( x,  y){
  grid[x][y]=10;
}


// This function is for demo only
//Burry iT!!
function loadDemoMap(){
  var testMap = Array(columns);
  testMap[0] = "99999999999999999999999999999999009";
  testMap[1] = "92000000000000000000009999999999009";
  testMap[2] = "92000000000000000000000999999999009";
  testMap[3] = "92002300340044000000000099999999009";
  testMap[4] = "92002300340044000000000099999999009";
  testMap[5] = "92002300340044000000000099999999009";
  testMap[6] = "92002300340044000000000099999999009";
  testMap[7] = "92002300340044000000000009999999119";
  testMap[8] = "92002300340044000000000000000000009";
  testMap[9] = "92002300340044000000055005500000009";
  testMap[10] = "92002300340044000000055005500000009";
  testMap[11] = "92002300340040000000055005500000009";
  testMap[12] = "92002300340040000000055005500000009";
  testMap[13] = "92002300340040066600055005500000009";
  testMap[14] = "92000000000000066600055005500000009";
  testMap[15] = "99000000000000066600055005500000009";
  testMap[16] = "99999999999999966600055005500000009";
  testMap[17] = "99999999999999966600055005500000009";
  testMap[18] = "99777777777770066600055005500000009";
  testMap[19] = "97777777777770066600000000000000009";
  testMap[20] = "97700000000000066600000000000000009";
  testMap[21] = "97700000000000000000000000000000009";
  testMap[22] = "97700000000000000000000000000000009";
  testMap[23] = "97700000000000666000000000000000009";
  testMap[24] = "90000000000006666000000000000000001";
  testMap[25] = "90000000000006600000000008800880001";
  testMap[26] = "90777777777006600000000008800880009";
  testMap[27] = "90777777777000000000000008800880009";
  testMap[28] = "90000000000000000000000008800880009";
  testMap[29] = "90000000000000000000000008800880089";
  testMap[30] = "99990000000000000000000000000000089";
  testMap[31] = "99990000000000000000000000000000089";
  testMap[32] = "99990000000000666666668888888888889";
  testMap[33] = "99999999999999999999999999999999999";

  for(var i = 0; i<columns; i++){
      for(var j = 0; j < rows; j++){
        grid[i][j]=testMap[i].charAt(j);
      }
  }
}
/////////////////////////////////
/*
function exportMapData(){

  var content = "";
  for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      content+=grid[i][j];
    }
  }
  //print("Content: ", content);
  uriContent = "data:application/octet-stream," + encodeURIComponent(content);
  newWindow = window.open(uriContent, 'map.txt');
  //saveStrings(data,'map.txt');

}
*/
////////////////////////////////
