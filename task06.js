//1.Write a “person” class to hold all the details?
//Answer;
class person{
    constructor(name,education,age,overallmark){
    this.name=name;
    this.education=education;
    this.age=age;
    this.overallmark=overallmark;
  }

  printdetails(){
      return `my name is ${this.name} and my education ${this.education} my age is ${this.age} and my over all mark ${this.overallmark}`;
    }
    }
    var c1 =new person("selvan","ECE",21,87);
    console.log(c1.printdetails());