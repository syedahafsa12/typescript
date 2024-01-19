"use strict";
// //class
// class House {
// numberofrooms: number = 4
// noofbath:number=1
// constructor(nofrooms:number,nofbath:number){
//       // console.log(numberofrooms,noofbath)
//       this.noofbath= nofbath
//       this.numberofrooms=nofrooms
// }
// }
// let house1 = new House(4,1)
// // let house2 = new House()
// // let house3 = new House()
// console.log(house1)
// // console.log(house2)
// // console.log(house3)
// house1.numberofrooms
// //obj 
// //notepad ma notes hne
// // let house5 = {
// //       numberofrooms : 4
// // }
// // let house6 = {
// //       numberofrooms : 4
// // }
// // let house7 = {
// //       numberofrooms : 4
// // }
// // console.log(house5)
// // console.log(house6)
// // console.log(house7)
//task 
//100% ok
// class Person {
//       readonly name:string
//       age:number
//       hobby:string
//       constructor(nam:string,ag:number,hobb:string){
//             this.name = nam
//             this.age = ag
//             this.hobby=hobb
//                   }
//                   doorbell(){
//                         console.log('bell pressed')
//                   }
// }
// let person = new Person("abubakar",9,"cry",);
// let personagain = new Person("abubakarjj",9,"cry",);
// console.log(person)
// console.log(personagain)
// person.doorbell()
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age, salary);
        this.salary = salary;
    }
}
class Student extends Person {
    constructor(name, age, roll) {
        super(name, age, roll); //hamesha top pa call
        this.rollno = roll;
    }
}
let Teach = new Teacher("hafsa", 13, 100000);
let Study = new Student("abu", 13, 100000);
console.log(Teach);
console.log(Study);
