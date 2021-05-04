class Slingshot {
    constructor(bodyA,bodyB){
        var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           stiffness : 0.2,
           length : 40
        }
       this.Slingshot =Matter.Constraint.create(options);
       World.add(world, this.Slingshot);
       this.bodyA=bodyA;
       this.bodyB=bodyB;
    }
    display(){
        strokeWeight(10);
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
    }
}