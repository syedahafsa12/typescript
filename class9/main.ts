///function

// function sum(){
//     console.log(2+4)
// }
// sum()

// function sum(num1:any,num2:any):number{
//     return num1 +num2}
//     let result = sum (3,6)
//     console.log(result)


//anonymous function
// type sum =(num1:number, num2:number)=>number;
// let Sum :sum = function(num1,num2){
//     return num1+num2;
// }
// Sum(3,6)

//ARROW FUNCTION without bracket
// let sum = (num1:number,num2:number):number => num1 +num2

// let result = sum(3,6);
// console.log(result)


// let mult = (num1:number,num2:number):number => num1 * num2 
// let result = mult(2,2)
// console.log(result)

// let modulus = (num1:number,num2:number):number => num1 % num2 
// let result = modulus(2,2)
// console.log(result)

// let fullname = (firstname: string, lastname?: string) => {
// if (lastname == undefined){
//     return firstname
// }else {
//     return firstname+""+lastname;
// }

// }
// let fulln = fullname('hamzah')
// console.log(fulln)

//DEFAULT PARMETER 
// let fullname = (lastname:string,firstname: string="syeda",) => {
//     if (lastname == undefined){
//         return firstname
//     }else {
//         return firstname+" "+lastname;
//     }
    
//     }
//     let fulln = fullname('hafsa')
//     console.log(fulln)
// let fullname = (firstname: string,lastname:string="syeda") => {
//     console.log(firstname,lastname)
//     return firstname+" "+lastname
//     }
//     let fulln = fullname('hafsa')
//     console.log(fulln)


//rest parameter 
//rest opertaor 

// let makemessage = (name:string)=>{
// console.log("hello",name)
// }
// makemessage("Ali")

// let makemessage = (name:string,...message:string[])=>{
//     console.log(message.join(" "))
//     }
//     makemessage("hello","how","hi")

//FUNCTION OVERLOADINGGGGG
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// add("hamzah","hamzah")//ok
// // add("hi",9)//wriong
// let result = add(4,7)
// console.log(result)

let fruits:[string,string,number]=["orange","mango",2];
fruits.push("apple");
fruits.pop(2)