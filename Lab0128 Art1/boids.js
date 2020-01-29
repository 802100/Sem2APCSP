class Boids{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.3);
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
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    // var distToBoids;
    // for(var i = 0; i < boids.length-1; i++){
    //   distToBoids = boids[i].loc.dist(boids[i+1].loc);
    //   if(distToBoids < 200){
    //     fill(this.clr);
    //     line(boids[i].loc.x,boids[i].loc.y,boids[i+1].loc.x,boids[i+1].loc.y);
    //   }
    // }
  }
  render(){
    var distToBoids;
    for(var i = 0; i < boids.length-1; i++){
      distToBoids = boids[i].loc.dist(boids[i+1].loc);
      if(distToBoids < 200){
        fill(this.clr);
        line(boids[i].loc.x,boids[i].loc.y,boids[i+1].loc.x,boids[i+1].loc.y);
      }
    }
  }
}
