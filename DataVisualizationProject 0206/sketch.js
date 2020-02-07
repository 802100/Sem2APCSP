//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
var playerSel;
var players = [];
var headerHeight = 200;
var chosenPlayers;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(220);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
createPlayerSelectionList();
getSelectedPlayers();
loadPlayerStats();



}

function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40);
  // locate at 270,40 in canvas coordinates
  playerSel.size(150,headerHeight-50);
  }

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}

function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
}
