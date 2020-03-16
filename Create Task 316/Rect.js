//start rect class (8/20)
class Rect{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.vel = createVector(w,h);
    this.acc = createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){
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
    this.loc.add(this.vel)

  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }
}// end rect class
