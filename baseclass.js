class Base {
    constructor(x,y,width,height,angle){
        var option = {
            restitution:0.8,
            friction : 1.0,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image=loadImage("images/base.png");
        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
}
}