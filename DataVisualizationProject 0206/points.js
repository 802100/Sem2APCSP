class Point{
  contructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(0);
  }

  this.render(){
    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,10,10)
  }


}
