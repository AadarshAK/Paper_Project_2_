class Paper{
   constructor(x,y,radius){
      var options={
       'restitution':0.8,
       'friction' : 0.3,
       'density':0.2,
      }

      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.image=loadImage("paper.png");
      World.add(world,this.body);
   }

   display(){

       push();
       var pos=this.body.position;
       var angle=this.body.angle;
       translate(pos.x,pos.y);
       rotate(angle);
       fill("white");
       
       imageMode(RADIUS);
       image(this.image,0,0,this.radius,this.radius);
       pop();
   }
}

