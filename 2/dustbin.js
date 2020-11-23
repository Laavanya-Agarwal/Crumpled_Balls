class Dustbin {
    
    constructor(){
       this.bin1=Bodies.rectangle(560,675,100,10,{isStatic:true})
       this.bin2=Bodies.rectangle(510,625,10,100,{isStatic:true})
       this.bin3=Bodies.rectangle(610,625,10,100,{isStatic:true})
       World.add(world,this.bin1)
       World.add(world,this.bin2)
       World.add(world,this.bin3)

        this.image = loadImage("dustbin.png");
        }
        
    display(){
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(this.bin1.position.x,this.bin1.position.y,100,10)
        rect(this.bin2.position.x,this.bin2.position.y,10,100)
        rect(this.bin3.position.x,this.bin3.position.y,10,100)
        imageMode(CENTER);
        image(this.image,560,615,150,150);
        }
}