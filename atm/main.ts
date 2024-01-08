// import inquirer from "inquirer";
// import { faker } from "@faker-js/faker";

// interface User {
//     name: string,
//     id: number,
//     balance: number,
//     pin: number,
//     accountnumber: number,
// }
// const createuser = () => {
//     let users: User[] = []

//     for (let i = 0; i < 5; i++) {
//         let user: User = {
//             name: faker.person.fullName(),
//             id: i,
//             balance: 1000000 * i,
//             pin: 1000 + i,
//             accountnumber: Math.floor(10000000 * Math.random() * 900000000),
//         }
//         users.push(user)


//     }

//     return users
// }
// const atmmachine = async(users:User[])=>{
// const res = await inquirer.prompt({
//     type:"number",
//     name:"pin",
//     message:"Enter your pin"

// })


// console.log(res)


// const user = users.find(val => val.pin == res.pin)

// if(user){
// console.log(`Welcome ${user.name}!`)
// atmfunc(user)
// return
// }else{console.log("Invalid Pin")}
// }

// const atmfunc = async (user:User)=>{
//     const ans = await inquirer.prompt(
//     {
//             type: "list",
//             name: "transaction",
//             message: "Choose your Transaction type",
//             choices: ["FastCash", "Withdraw"]
//         },{
//             type: "number",
//             name: "amount",
//             message: "Enter your Amount",

//         })
//        return
// }
// const users = createuser()
// atmmachine(users)
// import inquirer from "inquirer";
// import { faker } from "@faker-js/faker";

// interface User {
//     name: string;
//     id: number;
//     balance: number;
//     pin: number;
//     password: number;
//     accountnumber: number;
// }

// const createUsers = (): User[] => {
//     let users: User[] = [];

//     for (let i = 0; i < 5; i++) {
//         let user: User = {
//             name: faker.person.fullName(),
//             id: i,
//             balance: 1000000 * i,
//             pin: 1000 + i,
//             password: i,
//             accountnumber: Math.floor(10000000 * Math.random() * 900000000),
//         };
//         users.push(user);
//     }

//     return users;
// };

// const atmFunc = async (user: User): Promise<void> => {
//     while (true) {
//         const ans = await inquirer.prompt({
//             type: "list",
//             name: "transaction",
//             message: "Choose your Transaction type",
//             choices: ["FastCash", "Withdraw", "View Balance", "Exit"],
//         });

//         if (ans.transaction === "FastCash") {
//             await handleFastCash(user);
//         } else if (ans.transaction === "Withdraw") {
//             await handleWithdraw(user);
//         } else if (ans.transaction === "View Balance") {
//             console.log(`Your current balance is Rs. ${user.balance}`);
//         } else if (ans.transaction === "Exit") {
//             console.log("Exiting ATM. Made by Syeda Hafsa");
//             return;
//         } else {
//             console.log("Invalid transaction type");
//         }
//     }
// };

// const handleFastCash = async (user: User): Promise<void> => {
//     const ans = await inquirer.prompt({
//         type: "number",
//         name: "amount",
//         message: "Enter the FastCash amount",
//     });

//     if (ans.amount <= user.balance) {
//         user.balance -= ans.amount;
//         console.log(`FastCash Successful! Your new balance is Rs. ${user.balance}`);
//     } else {
//         console.log("Insufficient funds for FastCash");
//     }
// };

// const handleWithdraw = async (user: User): Promise<void> => {
//     const ans = await inquirer.prompt({
//         type: "number",
//         name: "amount",
//         message: "Enter the Withdraw amount",
//     });

//     if (ans.amount <= user.balance) {
//         user.balance -= ans.amount;
//         console.log(`Withdraw Successful! Your new balance is Rs. ${user.balance}`);
//     } else {
//         console.log("Insufficient funds for Withdraw");
//     }
// };

// const atmMachine = async (users: User[]): Promise<void> => {
//     const res = await inquirer.prompt({
//         type: "password",
//         name: "pin",
//         message: "Enter your pin",
//     });

//     const pin = Number(res.pin);
//     const password = pin >= 1000 && pin <= 1004 ? pin - 1000 : undefined;
//     const user = users.find((val) => val.pin === pin && val.password === password);

//     if (user) {
//         console.log(`Welcome ${user.name}!`);
//         await atmFunc(user);
//     } else {
//         console.log("Invalid Pin or Password");
//     }
// };

// const users = createUsers();
// atmMachine(users);

import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

interface User {
    name: string,
    id: number,
    balance: number,
    pin: number,
    accountnumber: number,
}
const createuser = () => {
    let users: User[] = []

    for (let i = 0; i < 5; i++) {
        let user: User = {
            name: faker.person.fullName(),
            id: i,
            balance: 1000000 * i,
            pin: 1000 + i,
            accountnumber: Math.floor(10000000 * Math.random() * 900000000),
        }
        users.push(user)


    }

    return users
}
const atmmachine = async (users: User[]) => {
    const res = await inquirer.prompt({
        type: "number",
        name: "pin",
        message: "Enter your pin"

    })


    console.log(res)


    const user = users.find(val => val.pin == res.pin)

    if (user) {
        console.log(`Welcome ${user.name}!`)
        atmfunc(user)
        return
    } else { console.log("Invalid Pin") }
}

const atmfunc = async (user: User) => {
    const ans = await inquirer.prompt(
        {
            type: "list",
            name: "transaction",
            message: "Choose your Transaction type",
            choices: ["balance", "Withdraw", "exit"]
        })
    if (ans.transaction === "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            name: "rupee",
            message: "Enter your Amount",

        })
      
        if (amount.rupee > user.balance) {
            console.log('Insufficient balance');
        } else if (amount.rupee > 25000) {
            console.log("You cannot withdraw more than 25000");
        } else {
            console.log(`Withdraw amount: ${amount.rupee}`);
            console.log(`Balance: ${user.balance - amount.rupee}`);
        }
    if (ans.transaction === "balance") {
        console.log(`Balance:${user.balance}`)
        return

    }
    if (ans.transaction === "exit") {
        console.log("Thanks for using ATM Made by Syeda Hafsa")
    }

}}
const users = createuser()
atmmachine(users)          