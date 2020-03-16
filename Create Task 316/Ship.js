//start ship class
//rotation
class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.id = id;
    this.angle = 0;
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){
    if(this.loc.x < 0) this.loc.x = width;
    if(this.loc.x > width) this.loc.x = 0;
    if(this.loc.y < 0) this.loc.y = height;
    if(this.loc.y > height) this.loc.y = 0;
  }

  update(){
    var distToAtBall;
    var distToRepBall;
    if(this.id >= 0){
      distToAtBall = this.loc.dist(atBall.loc);
      distToRepBall = this.loc.dist(repBall.loc);
      if(distToAtBall < 450){
        //add atraction
        this.acc = p5.Vector.sub(atBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToRepBall < 150){
        //add atraction
        this.acc = p5.Vector.sub( this.loc, repBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }

    }


    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    push();
    translate(this.loc.x, this.loc.y);
    this.angle = this.angle + .1;
    rotate(this.vel.heading());
    triangle(-5,8,5,8,0,-8);
    pop();


  }


}
