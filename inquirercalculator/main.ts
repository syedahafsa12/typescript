// import inquirer from "inquirer"

// let number = await inquirer.prompt({
//     type:"number",
//     name:"n1",
//     message:"Enter first Number"
// })
// console.log(number)
import inquirer from "inquirer";
import add from "./add.js"
import mult from "./mult.js"
import div from "./div.js"
import sub from "./sub.js"

async function main() {
    const answer = await inquirer.prompt([{
        type: "number",
        name: "n1",
        message: "Enter first number"

    },
    {
        type: "number",
        name: "n2",
        message: "Enter your Second number"
    }, {
        type: "list",
        name: "operator",
        message: "Choose any one operator",
        choices: [{ name: "add", value: add },
        { name: "sub", value: sub },
        { name: "mult", value: mult },
        { name: "div", value: div },],
    }
    ])
    console.log(`The Answer is ${answer.operator(answer.n1, answer.n2)}`)}
main()
