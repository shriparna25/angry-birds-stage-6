class Log extends Base{
    constructor(x,y,width,height,angle){
    super(x,y,width,height,angle);
        
       this.image=loadImage("images/wood2.png");
       Matter.Body.setAngle(this.body, angle);
    
    }
     
}