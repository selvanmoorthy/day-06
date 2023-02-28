 //2.write a class to calculate the uber price?
    //Answer;
    class uber{
        constructor(name,km,location){
            this.name=name;
            this.km=km;
            this.location=location;
            
        }
        price(){
            return `my name is ${this.name} my drop location ${this.location} per km is 18 rupees my total km is here to my house 20km total fare ${this.km*18}`;
        }
    }
    var c1 = new uber("guvi",20,"madurai");
    console.log(c1.price());