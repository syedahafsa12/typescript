type children = {
    name: string,
    age: number
}



type person = {
    name: string,
    age: number,
    email: string,
    children?: {
        name: string,
        age: number
    }
}
type personn = {
    name: string,
    age: number,
    email: string,
    children?: children
}

let pers: personn = {
    name: "bushra",
    age: 39,
    email: "abc@gmail.com",
    children: {
        name: "hafsa",
        age: 13
    }
    //no extra property allowed (fresh object)
}
const person2: personn = {
    name: "muh",
    age: 22,
    email: "hsd"

}
// person = person2;//stale


// type student = {
//     name: string,
//     rollnumber: number
// }
// type teacher = {
//     name: string,
//     experince: Number
// }
// let std1: student = {
//     name: "bushra",
//     rollnumber: 999
// }
// let teacher1: teacher = {
//     name: "zia",
//     experince: 10,
// }
// // let both: student | teacher = {
// //     name: "hafsa"
// //     ,
// //     experince:6,
// //     rollnumber:6

// // }

// let both:student&teacher={
//     experince:9,
//     name:"hafsa",
//     rollnumber:0
// }

// let a :unknown="helloworld";
// let b :boolean=true;
//a=10
//a=true
//a ={}
//a=b
//b=a
// let a :unknown
// a = "hamzah"as string

// let myname:unknown="zia";
// console.log((myname as string).toUpperCase())
// myname

// let a:string = "hamzah";
// let b:unknown=22;
// a=b as string

// let meetingday:string='monday'
// if(meetingday=="sunday"){
//     console.log("no meeting")
// }else if(meetingday ==="monday"){
//     console.log("meeting at 10:00 am")
// }

// enum days {
//     sunday,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday
// }
// console.log(days.wednesday)

// // let meetingday:days=days.monday
// let meetingday:days = days.saturday

// enum operator{
//     addition,
//     subraction,
//     multiplication,
//     division
// }
// let cal:operator= operator.addition;
// if(cal===operator.addition){
// console.log(2+2)
// }
// type person={
//     name:string}
//     let p:person[]=[{name:"hafa"},{name:"hi"}]