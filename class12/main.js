"use strict";
// incapsulation:
// Access modifer
// public        bdefault behaviour of property.
// class Person{
//     name:string = "sarmad"
//     getName(){
//         console.log(this.)
//     }
// }
// let p = new Person()
// // p.name   class ke bahir accessable he
// // private            just apne class mn use hoga
// class Person{
//     name:string = "sarmad"
//     private salary:number = 1000
//      _salary:number = 1000   // JS mn private bnane ke liye underscore use krte the ke ye class ke bahir access na ho ske
//     getName(){
//         console.log(this.name)
//     }
// }
// let p = new Person()
// p.salary   // private modifer just class ke ander accessable hoga
// console.log(p.salary);        // code JS chalata he is waja se chal jayega
// kse bhi property ko direct access na kr ske is liye provate kr denge
// protected
// // class and chield mn use kr sakte hn uske bahir nhi use kr sakte
// class Person {
//   name: string = "sarmad";
//   protected salary: number = 1000;
//   //   _salary: number = 1000;
//   getName() {
//     console.log(this.name);
//   }
// }
// class Humen extends Person {
//   hello() {
//     this.salary; // access nhi hoge sakary kyu ke private he
//   }
// }
// let p = new Person();
// let h = new Humen();
// console.log(h.salary);
// Getter and setter
// getter and setter mn name same hoga
// class Person {
//   private _name = "sarmad";
//   get name() {
//     // get ak reserved key word he iur ye return krta he warna error dega
//     return this._name;
//   }
//   set name(val) {
//     // set ke method mn ham ap parameter dete hn and isko return nhi krte
//     this._name = val;
//   }
//   updateName(nam: String) {
//     this._name = nam;
//   }
// }
// let p = new Person();
// console.log(p.name); // and agr koye value assign nhi kre ge to setter hoga
// p.name = 'abdul'              // setter ke parameter ke value idr define kre ge ese tra se and isko multiple time use kr sakte hn
// console.log(p.name);
// p.name = 'rehman'
// console.log(p.name);
// p.updateName("rehman");
// console.log(p.updateName.name);
// class Person {
//     private _name = 'sarmad'
//     private _salary = '100000'
// get salary (){
//     // let isallowed = true
//     let isallowed = false
//     if(isallowed) return this._salary
//     return "begam ke ilawa koye access nhi kr sakta "
// }
// set salary(val:string){
//     this._salary = val
// }
// updateName (nam:string){
//     this._name = nam
// }
// }
// let p = new Person
// console.log(p.salary);
// // // IMPLEMENT: JO FIRST CLASS MN HO WHI SECOND MN HONA CHAHAYE
// interface Hello {
//   age: number;
//   email?: string;
// }
// class Person {
//   name = "bilal";
// }
// class Human implements Person, Hello {
//   name = "Ábdul";
//   age = 19;
//   firstName = "rehman";
//   secondName = "rehman";
// }
// let h = new Human();
// console.log(h.name);
// // polymorphism
// METHOD OVERWRITE
// class Player {
//   game() {
//     console.log("Cricket");
//   }
// }
// class Game extends Player {
//   game() {
//     console.log("Football");
//   }
// }
// let g = new Game()
// g.game()
// console.log(g.game);
// class Animal {
//   sound() {
//     console.log("some sound");
//   }
// }
// class Cat extends Animal {
//   sound(): void {
//     console.log("Meeeooow...");
//   }
// }
// class Cow extends Animal{
//     sound(){
//         console.log("Muuuuu..");
//     }
// }
// ABSTRACT CLASSES  ASSINGEMENT
// STRUCTURAL TYPING.
// let a  = {name:"ubaid"}
// let b = {name:"bilal", age:40}
// a = b
// jab bhi ham class bnate hn us class se ham object nikalte hn jo uske first priority he but class ko ham as a type bhi use kr sakte hn
// class Dog {
//     name: string = "";
//   }
//   class Cat {
//     name = "Bano Billi";
//     age = 1;
//  }
// let d: Dog = new Dog();
// let c: Cat = new Cat();
// d = c;  // No Error
// c = d; // Error
// d = new Cat(); // No Error
// c = new Dog(); // Error
// c = d as Dog // Error
// c = d as Cat // No Error
// let d: Cat = new Dog();
// let c: Dog = new Cat();
// GENERIC TYPE
//
// function str(val:string):string{
//     return val
// }
// str(4)
// function num(val: number): number {
//   return val;
// }
// num(4);
//   function genericFunction<T>(val: T): T {
//     return val;
//   }
//   genericFunction<string>("[1,2,3,4,5,]");
//   genericFunction<number>(1);
//   genericFunction<boolean>(true);
//   genericFunction<number[]>([1, 2, 3, 4, 5]);
///YAHAN TAK COPIED AS MY LAPTOP WAS NOT WORKING 
//MY CODE 
// class Animal {
//     sound(){
//         console.log('some sound')
//     }
// }
// class cow extends Animal{
//     sound():void {
//         console.log('muuuuu')
//     }
// }class cat extends Animal{
//     sound():void {
//         console.log('meowwww')
//     }
// }
// let a = {name:'ubaid'}
// let b = {name:"bilal",age:80}
// a=b//becauz a ki value b ma mojood ha 
// class Dog {
//     name:string="tommy"
// }
// class Cat {
//     name="mano billi";
//     age=8
// }
// let d = new Dog()
// let c = new Cat()//fresh
// let d:Cat = new Dog() //eroor
//  let c:Dog = new Cat()
// //d=c//noerror
// // c=d error
// // c = new Dog() erorr
// // d= new Cat() ok
// //c=d as Dog//error
// // console.log(d)
// let d: Cat = new Dog() as Cat
// // let d: Cat = new Dog() as Dog
// console.log(c)
// function genericfunc <HNCjm> (val:HNCjm):HNCjm{
// return val
// }
// genericfunc(['ji',true,9])
// genericfunc<string>('hafsa')
