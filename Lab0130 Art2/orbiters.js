class Orbiters{
  Constructor(x,y,dx,dy){
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

  }

  update(){
  //this.vel.add(this.acc);
  //this.vel.limit(4);
  this.loc.add(this.vel);
  }

  render(){
  fill(0);
  ellipse(this.loc.x,this.loc.y,10,10);
  }
}
