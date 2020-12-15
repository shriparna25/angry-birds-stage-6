class Bird extends Base {
    constructor(x,y){
       super(x,y,50,50);
    
        this.image=loadImage("images/bird.png");
        this.smoke_img=loadImage("images/smoke.png");
        this.trajectory=[];
        this.visibility=255;
    
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y= mouseY;

        super.display();
        if(this.body.position.x>200&&this.body.velocity.x>5){
       var  position = [this.body.position.x,this.body.position.y];
       this.trajectory.push(position);
        }
        
       for (var i=0; i<this.trajectory.length;i++){
           push();
           this.visibility = this.visibility-0.1;
           tint(255,this.visibility);
           image(this.smoke_img,this.trajectory[i][0],this.trajectory[i][1]);
           pop();
       }
}
}