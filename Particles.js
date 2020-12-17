class Particles {
    constructor(x,y,radius){
        var options = {
            'resetutiion': 1,
            'friction':0.1,
            'density': 1.0
            
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
    }
    display(){  
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.radius)
    }
}