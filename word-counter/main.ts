import chalk from "chalk";
import inquirer from "inquirer";

function counter (para:string){
let freewhitespace = para.replace(/\s/g,"")
return freewhitespace.length
}
// console.log(counter('Hello hafsa'))
async function start(){
let q1 = await inquirer.prompt({
    type:"input",
    name:"userinputforcount",
    message:"Enter text to count!"
})
console.log(`You have written:${q1.userinputforcount}`)

console.log(`${chalk.greenBright('Your text count without spaces is')} ${chalk.redBright.bold(counter(q1.userinputforcount))}`)
}

start()


