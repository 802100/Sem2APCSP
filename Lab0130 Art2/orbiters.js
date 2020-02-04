class Orbiters{
  constructor(x,y,dx,dy,clr){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.3);
    this.rad = 5
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
    this.loc.add(this.vel);

    for(var i = 0; i < orbiters.length-1; i++){
      for(var n = 0; n < boids.length -1; n++){
        var distToBoids = this.loc.dist(orbiters[i].loc);
        if(distToBoids < 100){
            //add atraction
            this.acc = p5.Vector.sub(boids[n].loc, orbiters[i].loc);
            this.acc.normalize();
            this.acc.mult(0.1);
          }
          if(distToBoids < 50){
            //add atraction
            this.acc = p5.Vector.sub( orbiters[i].loc, boids[n].loc);
            this.acc.normalize();
            this.acc.mult(0.5);
          }
      }
      }

  }

  render(){
  // fill(250);
  // ellipse(this.loc.x,this.loc.y,this.rad*2,this.rad*2);
  }
}
