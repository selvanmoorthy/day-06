/4.The class Movie is stated below. An instance of class Movie represents a film. This class has the following?
//Answer;
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    printall(){
       return `our movie title is ${this.title} and our studio name called ${this.studio} total of rating ${this.rating} `;
    }
}
var c1 =new movie("guvi","guvistudio",10);
console.log(c1.printall());


