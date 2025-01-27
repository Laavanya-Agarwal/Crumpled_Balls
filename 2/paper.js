class Paper {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(100,200,20,options);
        World.add(world,this.body)
        this.image = loadImage("paper.png");
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("lightgreen")
        ellipse(0,0,17,17);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}