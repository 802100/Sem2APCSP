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
    this.vel.add(this.acc);
    this.vel.limit(4);
    //this.loc.add(this.vel);
    for(var i = 0; i < orbiters.length-1; i++){
      var distToBoids = this.loc.dist(orbiters[i].loc);
      if(distToBoids < 200){
        stroke(this.clr);
        line(this.loc.x,this.loc.y, orbiters[i].loc.x, orbiters[i].loc.y,random(255));
      }
      // if(distToBoids < 450){
      //     //add atraction
      //     this.acc = p5.Vector.sub(this.loc, orbiters[i].loc);
      //     this.acc.normalize();
      //     this.acc.mult(0.1);
      //   }
      //   if(distToBoids < 150){
      //     //add atraction
      //     this.acc = p5.Vector.sub( orbiters[i].loc, this.loc);
      //     this.acc.normalize();
      //     this.acc.mult(0.5);
      //   }
    }


  }
  render(){

    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.rad,this.rad);


  }
}
