class Ground {
    constructor(x, y, width, height) {
        //x = width/2, y = height - 10, width = width, height = 20
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, width, 10);
      //this.width, this.height
    }
};