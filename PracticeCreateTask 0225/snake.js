//Snake class
//1031
//SnakeGame
class Snake{
  constructor(x,y,dx,dy){
    this.head = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(0,255,0);
    this.body = [];
  }
//new body segment
  loadSegments(){
    this.body.push(createVector(0,0));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }


checkEdges(){
//if the snake hits the edges of the screen, gamestate = 3(game over)
  if(this.head.x < 0){
    gameState = 3;
  }
  if(this.head.x > width){
    gameState = 3;
  }
  if(this.head.y <0){
    gameState = 3;
  }
  if(this.head.y > height){
    gameState = 3;
  }//if the snake runs into its own body, gamestate = 3(game over)
  for(var i = this.body.length - 1; i > 0; i--){
    if(this.head.x === this.body[i].x &&
      this.head.y === this.body[i].y){
        gameState = 3;
      }
  }
}


update(){
  //update body segment 0
  for(var i = this.body.length-1; i>=0; i--){
    this.body[0].x = this.head.x;
    this.body[0].y = this.head.y;
  }//update body segments > 0
  for(var i = this.body.length-1; i>0; i--){
    this.body[i].x = this.body[i-1].x;
    this.body[i].y = this.body[i-1].y;
  }
  //update head
  this.head.add(this.vel);

}

render(){
  //load head
  fill(this.clr);
  rect(this.head.x, this.head.y, 20,20);
//load body
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, 20,20);
  }
}


}
