class Point{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(225);
    this.y = map(this.loc.y, 700, 300, 0, 700);
  }

  render(){
    fill(0);
    ellipse(this.loc.x,this.y,4,4)
  }


}
