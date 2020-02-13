//  Evangeline Viray
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
var playerSel;
var players = [];
var headerHeight = 105;
var chosenPlayers;
var points = [];
var statX;
var statY;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(220);
  fill(200, 30, 150);
  loadStats();
  createPlayerSelectionList();
  lables();
 loadPoints(2);

}

//  The draw function is called @ 30 fps
function draw() {
  graph();
  getSelectedPlayers();
  loadPlayerStats(chosenPlayers);
  drawPoints();



}
function graph(){
  strokeWeight(6);
  stroke(0);
  line(100,300,100,700);
  line(100,700,700,700);
}

function lables(){
  //choose player header
  fill(0);
  textSize(23);
  text("Choose a Player:",100,120);
  //graph lables
  textSize(20);
  text("Year", 390,760);
  //0
  text("0", 60,700);
}

//outline of the loadPoint function, incomplete
function loadPoints(n){
  for(var i = 0; i<n; i++){
      points[i] = new Point(0,400);
  }
}

//draw points
function drawPoints(){
  for(var i = 0; i < points.length ; i++){
    points[i].render();
  }
}

//create multy selction list for players
function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 100, (windowHeight-height)/2 + 20);
  // locate at 270,40 in canvas coordinates
  playerSel.size(150,headerHeight-50);
  playerSel.option(players[2403]);
  playerSel.option(players[3468]);
  playerSel.option(players[2316]);
  playerSel.changed(getSelectedPlayers);

  }

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}

//get player stats based on selected players
function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
}
//code below is not complete
// collect stats into arrays for generic approach to graphing
//function aggregateStats(player, stat) {
  //results = [];
 //for (var i =0; i<statsArray.length; i++) {
//}
