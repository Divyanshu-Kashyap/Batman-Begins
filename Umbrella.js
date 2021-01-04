class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.animation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png",
        "walking_6.png","walking_7.png","walking_8.png")
        this.umbrella = Bodies.circle(x,y,50,option);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        //animationMode(CENTER)
        animation(this.animation,pos.x,pos.y+70,300,300);

    }
}
