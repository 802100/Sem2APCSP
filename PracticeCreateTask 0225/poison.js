//Food class
//1031
//SnakeGame
class Poison{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(100,100,0);
  }

  run(){
    this.checkEdges();
    this.render();

  }
// snake eats apple?
  isColliding(n){
    if(poison[n].loc.x === snake.head.x &&
      poison[n].loc.y === snake.head.y){
          return true;
        }else{
          return false;
        }


  }
  //poison appears on food?
  appearOnFood(n){
    if(poison[n].loc.x === food.x &&
      poison[n].loc.y === food.y){
        return true;
      }else{
        return false;
      }
    }

  checkEdges(){
    //if poison is being eaten - load new food, update score
    for(var i = 0; i < poison.length; i++){
      if(poison[i].isColliding(i)){
      //  console.log("poison is colliding");
        loadFood();
        //increase poison by rate
        p = p+r;
        loadPoison(p);

        score = score - 50;
    }
  }
    //if food appears on body - reload
    for(var i = 0; i < poison.length; i++){
      if(poison[i].appearOnFood(i)){
        console.log("colliding with food");
        poison[i].loc.x = colW*Math.floor(random(20));
      }
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
