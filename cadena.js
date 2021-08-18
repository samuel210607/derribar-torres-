class cadena {
    constructor(bodyA, pointB){
        var atributos = {
            'bodyA': bodyA, 
            'pointB': pointB,
            'stiffness': 0.04, 
            'lenght': 2
        }
        this.pointB = pointB;
        this.honda = Constraint.create (atributos);
    World.add (world, this.honda)
    }
    volver(body ){
        this.honda.bodyA = body;
    }
    fly (){
        this.honda.bodyA =null;
    }
    display (){
        if (this.honda.bodyA){
var pointA, pointB;
pointA = this.honda.bodyA.position;
pointB = this.pointB 
    push ();
    strokeWeight (6);
    line (pointA.x, pointA.y, pointB.x, pointB.y);
    pop ();
}  
}
};