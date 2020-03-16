//start Paddle class (8/20)
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.size = createVector(w,h);
    this.w = 80;
    this.h = 20;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){
    // if hitting edges
    if(this.loc.x < 0){
      this.loc.x = -this.loc;
    }
    if(this.loc.x > 720){
      this.loc.x = 710;
    }

  }


  update(){
    // console.log("movement");
    var mouseLoc = createVector(mouseX-50,630);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

    //changing size of paddle depending on the mode
    if(gameState === 2 && mode === "easy"){
      this.w = 100;
    }
    if(gameState === 2 && mode === "med"){
      this.w = 90;
    }
    if(gameState === 2 && mode === "hard"){
      this.w = 70;
    }

  }

  render(){
    fill(255,0,0);
    rect(this.loc.x,this.loc.y,this.w,this.h,10);
  }
}// end Paddle class
