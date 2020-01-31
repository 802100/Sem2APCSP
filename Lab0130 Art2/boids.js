class Boids{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.1);
    this.clr = color(random(255),random(255),random(255));
    this.rad = 30;
  

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
    //this.vel.add(this.acc);
    this.vel.limit(4);
    //this.loc.add(this.vel);
    for(var i = 0; i < boids.length-1; i++){
      var distToBoids = this.loc.dist(boids[i].loc);
      if(this.rad + boids[i].rad > distToBoids){
        boids[i].render();
      }
    }

  }
  render(){

    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.rad,this.rad);


  }
}
