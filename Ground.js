class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,1700,70,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      rectMode(CENTER);
      fill("yellow");
      rect(this.body.position.x,this.body.position.y,1700,20);
    }
  };