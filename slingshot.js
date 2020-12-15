class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:1
          }
          this.pointB = pointB;
          this.Slingshot = Constraint.create(options);
          World.add(world,this.Slingshot);
          this.sling1=loadImage("images/sling1.png");
          this.sling2=loadImage("images/sling2.png");
          this.sling3=loadImage("images/sling3.png");

    }
Display(){
    image(this.sling1,200,200);
    image(this.sling2,170,200);

    if(this.Slingshot.bodyA){
        push();
    if(this.Slingshot.bodyA.position.x<220){
    strokeWeight(7);
    stroke(48,22,8);
    
    line(this.Slingshot.bodyA.position.x-20,this.Slingshot.bodyA.position.y,this.pointB.x-10,this.pointB.y);
    line(this.Slingshot.bodyA.position.x-20,this.Slingshot.bodyA.position.y,this.pointB.x+30,this.pointB.y);
    image(this.sling3,this.Slingshot.bodyA.position.x-30,this.Slingshot.bodyA.position.y-10,15,30);
    }
    else{ strokeWeight(4);
        stroke(48,22,8);
        
        line(this.Slingshot.bodyA.position.x+25,this.Slingshot.bodyA.position.y,this.pointB.x-10,this.pointB.y);
        line(this.Slingshot.bodyA.position.x+25,this.Slingshot.bodyA.position.y,this.pointB.x+30,this.pointB.y);
        image(this.sling3,this.Slingshot.bodyA.position.x+25,this.Slingshot.bodyA.position.y-10,15,30);
    }
    pop();
    }
}

fly (){
    this.Slingshot.bodyA = null;
}
 attach(body){
     this.Slingshot.bodyA = body;
 }

}