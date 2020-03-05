//Food class
//1031
//SnakeGame
class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
  }

  run(){
    this.checkEdges();
    this.render();
  }
// snake eats apple?
  isColliding(){
    if(this.loc.x === snake.head.x &&
      this.loc.y === snake.head.y){
        return true;
      }else{
        return false;
      }
  }
// food appears on body?
  appearOnBody(){
    for(var i = snake.body.length -1; i > 0; i--){
      if(this.loc.x === snake.body[i].x &&
        this.loc.y === snake.body[i].y){
          return true;
        }else{
          return false;
        }
    }
  }

  checkEdges(){
    //if food is being eaten - load new food/poison, load new body segment, update score
    if(food.isColliding()){
      snake.loadSegments();
      loadFood();
      //increase poison by rate
      p = p+r;
      loadPoison(p);

      score = score + 20;
    }
    //if food appears on body - reload
    if(food.appearOnBody()){
      console.log("colliding with body");
      loadFood();
    }

    //if food is of screen, reload food
    if(this.loc.x > 800 &&
      this.loc.y>800){
        console.log("food off screen");
        loadFood();
      }
    if(this.loc.x < 0 &&
      this.loc.y < 0){
        console.log("off screen");
        loadFood();
      }
    if(this.loc.x > 800){
      console.log("off screen");
      loadFood();
    }
    if(this.loc.y > 800){
      console.log("off screen");
      loadFood();
    }
    if(this.loc.x < 0){
      console.log("off screen");
      loadFood();
    }
    if(this.loc.y < 0){
      console.log("off screen");
      loadFood();
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
