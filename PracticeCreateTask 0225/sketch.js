//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score = 0;
var mode;
var gameState = 1;
var food;
var snake;
var rowH = 800/20;
var colW = 800/20;
var btnEasy;
var btnMed;
var btnHard;
var poison = [];
var r;
var p = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
// generate food, snake and buttons
  loadFood();
  loadPoison(p);
  loadSnake();
  loadButtons();

}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    titleScreen();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }
  //snake controlls
  snakeControlls();
}

//title screen
function titleScreen(){
  //setup
  score = 0
  background(5,5,5);
  //title
  textSize(40);
  fill(0,255,0);
  text("Snake Game", 265,200);
  //instructions
  textSize(16);
  fill(255);
  text("                    Use the arrow keys to controll the snake\n" +
   "     Eat the apples to grow and earn points, don't eat the bad apples \n" +
   "Don't run into your body or the edges of the screen otherwise you lose", 155,400);
   fill(250,0,250);
   //render buttons
  runButtons();
  //easy mode
  if(mouseIsPressed &&
    mouseX>200 && mouseX<280 &&
    mouseY>600 && mouseY<640){
      mode = "easy";
      gameState = 2;
    }
    //medium mode
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "med";
      gameState = 2;
    }
    //hard mode
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "hard";
      gameState = 2;
    }

}

// play game screen
function playGame(){
  background(5, 5, 5);
  //difficulty(frameRate), bad aplle increase rate
  if(mode === "easy"){
    frameRate(10);
    r = 1;
  }
  if(mode === "med"){
    frameRate(15);
    r = 2;
  }
  if(mode === "hard"){
    frameRate(20);
    r = 3;
  }
  //score
  textSize(20);
  fill(255);
  text("score = " + score,20,20);
  //render the food and snake
  runFood();
  runPoison();
  runSnake();
}

// end game screen
function endGame(){
  background(5,5,5);
  //Game Over text
  textSize(50);
  fill(255,0,0);
  text("Game Over",270,200);
  //final score
  textSize(20);
  fill(250,0,250);
  text("final score = " + score,320,400);
  //reset game
  textSize(20);
  fill(255);
  text("press the spacebar to restart",255,450);
  for(var i = 0; i<poison.length; i++){
    subset(poison,i,poison.length-1)
  }
  //reset key(spacebar)
  if(keyCode === 32){
    loadFood();
    poison = [];
    p = 1;
    loadPoison(p);
    loadSnake();
    gameState = 1;
  }

}

//function load new buttons
function loadButtons(){
  btnEasy = new Button(200,600,70,40, "easy", color(0,50,250));
  btnMed = new Button(350,600,70,40, "med", color(250,0,250));
  btnHard = new Button(500,600,70,40,"hard", color(255,0,0));
}

//function run buttons
function runButtons(){
  btnEasy.run();
  btnMed.run();
  btnHard.run();
}

// load food in random location
function loadFood(n){
    food = new Food(colW*Math.floor(random(20)),rowH*Math.floor(random(20)));

  }
// render food in random location
function runFood(){
  food.run();
  }
//loadPoison
function loadPoison(n){
  for(var i = 0; i < n; i++){
    poison[i] = new Poison(colW*Math.floor(random(20)),rowH*Math.floor(random(20)));
  }
}
//render Poison in random loc
function runPoison(){
  for(var i = 0; i < poison.length; i++){
    poison[i].run();
  }
}
//load snake head
function loadSnake(){
  snake = new Snake(colW*10,rowH*10,0,0);
}

// run snake head
function runSnake(){
  snake.run();
}

//snake controlls
function snakeControlls(){
  // move right
  if(keyIsDown(RIGHT_ARROW)){
    snake.vel.x = 20;
    snake.vel.y = 0;
    //move left
  }else if(keyIsDown(LEFT_ARROW)){
    snake.vel.x = -20;
    snake.vel.y = 0;
    //move up
  }else if(keyIsDown(UP_ARROW)){
    snake.vel.y = -20;
    snake.vel.x = 0;
    //move down
  }else if(keyIsDown(DOWN_ARROW)){
    snake.vel.y = 20;
    snake.vel.x = 0;
  }

}
