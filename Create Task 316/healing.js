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

  checkEdges(){
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
