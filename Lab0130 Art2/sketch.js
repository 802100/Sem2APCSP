//  Evangeline Viray
//  Lab0128 Art 1
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
var orbiters = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20);
  fill(200, 30, 150);
  loadBoids(10);
  loadOrbiters(20);


}

//  The draw function is called @ 30 fps
function draw() {
  //background(20);
  runBoids();
  runOrbiters()
;





}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boids(random(width),random(height),random(-8,8),random(-8,8));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}

function loadOrbiters(n){
  for(var i = 0 ; i < n; i++){
    orbiters[i] = new Orbiters(random(width),random(height),random(-8,8),random(-8,8));
  }
}

function runOrbiters(){
  for(var i = 0; i < orbiters.length; i++){
    orbiters[i].run();
  }
}
