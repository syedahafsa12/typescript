// // function hello(){
// //     console.log("Hello hafsa");
// // }
// // function world (callback:any){
// // callback()
// // }
// // world(hello)
// // let a = "Hello World"
// // function wo (callback:any){
// //   callback()
// //     }
// //     world(a)
    
// // function hell (nam:string){
// //     console.log(nam);
// // }
// // function worl (callback:any){
    
// //     let a = "Sarmad "
// //     callback(a)
// //       }
// //       world(hell)



      // understnad easily

      function func (nam:string){
console.log(nam);
      }
      function hello (text:string,callback:any){
        callback(text)
      }
      hello("hellosarmad",func)

// // //syncronise and assyncronise 

// // console.log("first");

// // setTimeout(() => {
// //     console.log("second"
// //     );
// // }, 5000);

// // for(let i =0;i<10000000;i++){

// // console.log("kj");
// // }
// // console.log("third");

// //promise 

// // let myPromise = new Promise((resolve,reject)=>{
// //     console.log("Promise pending...");

// //     setTimeout(() => {console.log("status reject");
// // // resolve("Sarmad")
// // reject("data fetch error...") 
// // },2000)
// // })
// // let myPromise = new Promise((resolve,reject)=>{
// //     console.log("Promise pending...");
// // setTimeout(()=>{
// //     let data = ["Hafsa"]
// //     if(data){console.log("promise resolved")
// //     resolve(data)}else{
// // console.log("promise reject");
// // reject("data fetch error")
// // }
// // }, 2000)
// // })
// // myPromise
// // .then((res)=>(console.log(res)))
// // .catch((err)=>(console.log(err)))


// //fetch 

// // let data = fetch("https://jsonplaceholder.typicode.com/users")
// // .then((res)=>res.json())
// // .then((res)=>(console.log(res)))
// // .catch((err)=>(console.log(err)))

// //main
// async function datafunc(){
//     let fetchdata = await fetch ("https://jsonplaceholder.typicode.com/users")
// let data = fetchdata.json()
// console.log(data)
// }













