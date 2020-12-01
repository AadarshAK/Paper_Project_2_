class Bin { 
   constructor(x,y,width,height){
     
      var options={
         'isStatic':true,
         'restitution':0.2,
         'density':0.1,
     }
     this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.image=loadImage("dustbingreen.png");
      this.width = width;
      this.height=height;
   }

   display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,-80,this.width,this.width);

      
      pop();
   }
}; 


/*class Bin{ 
    constructor(x,y,width,height){
       //super(x,y,width,height);

       var options={
         //'isStatic':true,
         'restitution':0.2,
         'density':0.1,
     }
     
   
       this.image=loadImage("dustbingreen.png");

       this.left=Bodies.rectangle(520,580,20,150);
       this.right=Bodies.rectangle(680,580,20,150);
       this.bottom=Bodies.rectangle(600,650,180,20);

       World.add(world,this.bottom);
       World.add(world,this.left);
       World.add(world,this.right);
    }
 
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);

      
      pop();
    }
 };
 */ 