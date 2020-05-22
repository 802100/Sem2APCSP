//Button class (3/16)
//Paddle game
class Button{
  constructor(x,y,w,h,msg,clr){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.msg = msg;
    this.clr = clr;
  }

  run(){
  this.render();
  }

  render(){

    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h);
    textSize(20);
    fill(255);
    text(this.msg,this.loc.x + 15, this.loc.y + 25);


  }



}
