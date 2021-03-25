




class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadImage("walking_1.png")      
        this.umbrella = Bodies.circle(x,y,1,option);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,350,350);

    }
}