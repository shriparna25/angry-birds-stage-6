class Pig extends Base {
    constructor(x,y){
       super(x,y,50,50);
        this.image=loadImage("images/enemy.png");
        this.visible=255;
        }

        score(){
            if(this.visible<0&&this.visible>-505){
                score++
            }
        }
      
  display(){
      

      if(this.body.speed<3){

      super.display();
      }
      else{
          pig_snort.play();
          World.remove(world,this.body);
          push();
          this.visible=this.visible-5;
          tint(255,this.visible);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
         
          pop();
      }
    
  }

}