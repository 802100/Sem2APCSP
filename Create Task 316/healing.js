class Healing{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(0,230,25);
    this.acc = createVector(0,0.1);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }
  //if healing ball collides with the paddle return true
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
    for(var i = 0; i < healing.length; i++){
      if(healing[i].isColliding()){
        console.log("healing collision");
        healing.splice(i,1);
        lives = lives+1;
      }
    }




    //if hitting edges of the screen
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

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    for(var i = 0; i < healing.length; i++){
      fill(this.clr);
      ellipse(this.loc.x,this.loc.y,30,30);
    }
  }

}
