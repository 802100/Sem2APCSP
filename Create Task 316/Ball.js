//start ball class (8/20)
//rotation
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.1);
    this.id = id;
    this.w = 20;
    this.clr = color(random(255),random(255),random(255));


    }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }
  //is the ball cliiding with the paddle?
  isColliding(){
    if(this.loc.x>paddle.loc.x &&
      this.loc.x<paddle.loc.x + paddle.w &&
      this.loc.y>paddle.loc.y &&
      this.loc.y<paddle.loc.y + paddle.h){
        return true;
      }else{
        return false;
      }

  }


  checkEdges(){
    //if colliding with paddle and velocity is negative
    if(this.id >= 0){
      for(var i = balls.length -1; i >= 0; i--){
        if(balls[i].isColliding() && balls[i].vel.y < 0){
          console.log("collision");
          lives = lives - 1;
          h = h+1;
          loadBalls(b + 3);
          clear();
        }
      }
      //if colliding with paddle
      for(var i = balls.length -1; i >= 0; i--){
        if(balls[i].isColliding()){
          score = score + 20;
          balls.splice(i,1)
        }
      }
      //if hitting edge of screen
        if(this.loc.x < 0){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.x > width){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.y <0){
          this.vel.y = -this.vel.y;
        }
        if(this.loc.y > height){
          this.vel.y = -this.vel.y;
        }


    //if mainball hits the paddle, lose game
  }else if(this.id === -1){
      if(mainball.isColliding()){
        console.log("collision");
        gameState = 6;
      }
      //if hitting edge of screen
        if(this.loc.x < 0){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.x > width){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.y <0){
          this.vel.y = -this.vel.y;
        }
        if(this.loc.y > height){
          this.vel.y = -this.vel.y;
        }

    }

  }

  update(){


    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    if(this.id >= 0){
      fill(this.clr);
      ellipse(this.loc.x,this.loc.y,this.w,this.w);
    }else if(this.id === -1){
      fill(255,0,0);
      ellipse(this.loc.x,this.loc.y,50,50);
    }
  }
}// end ball class
