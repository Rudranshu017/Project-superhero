class hero {
    constructor(x,y,width, height) {
       var options = {
           frictionAir : 0.005,
           density : 1
       }
       this.body = Bodies.rectangle(x,y,width, height, options)
       this.w = width;
       this.h = height;
       World.add(world,this.body)
    }
     display() {
         var pos = this.body.position
         var angle = this.body.angle
         push()
         translate(pos.x,pos.y)
         rotate(angle)
         strokeWeight(4)
         stroke("white")
         ellipseMode(CENTER)
         fill ("gray")
         rect(0, 0, this.w, this.h)
         pop()
     }
   }
