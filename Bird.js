class Bird extends Parent{
    constructor(x, y) {
      super(x,y,50,50);
  
      this.image=loadImage("sprites/polygon.png");
      
    };
    display(){
      //var pos = this.body.position;
      //pos.x = mouseX;
      //ops.y = mouseY;
      super.display();
      
    };
  };
  