//3.Convert the UML diagram to Typescript class. - use number for double?
//Answert;
class cricle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getarea(){
        var area = Math.PI*this.radius*this.radius;
    return `Area of the circle is ${area}`;
    }
    getcircumference(){
        var circumference = 2*Math.PI*this.radius;
    return `circumference of the circle is ${circumference}`;
    }
    }
    var c1=new cricle(5,"red");
    console.log(c1.getarea());
    console.log(c1.getcircumference());