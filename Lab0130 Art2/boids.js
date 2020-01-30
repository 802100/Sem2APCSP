class Boids{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.1);
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
  //  this.vel.add(this.acc);
    this.loc.add(this.vel);

    for(var i = 0; i < boids.length; i++){
      
    }
    var distToBoid =


  }
  render(){
    fill(this.clr);
    push();
    translate(boids[0].loc.x,boids[0].loc.y);
    this.angle = this.vel.heading() + PI/2;
    rotate(this.angle);
    ellipse(20,20,this.loc.x,this.loc.y);
    pop();
  }
}
