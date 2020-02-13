class Point{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(0);
    this.y = map(500, 300, 700, 0, 400);
  }

  render(){
    fill(0);
    ellipse(this.y,this.loc.y,10,10)
  }


}
