class Paper{
    constructor(x, y,r) {
        var options = {

            'friction':0.5, 
            'density':1.2,
            restitution:0.3
        }
        this.r=r
        this.body = Bodies.circle(x, y,this.r/2 ,  options);
        
        this.image = loadImage("paper.png")
        World.add(world, this.body);

      
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image , 0, 0, this.r , this.r);
        pop();
      }
    }