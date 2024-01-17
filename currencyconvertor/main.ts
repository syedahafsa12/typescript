import chalk from "chalk"
import inquirer from "inquirer"


let apilink = "https://v6.exchangerate-api.com/v6/85e01c20b1849a99f1adaa79/latest/USD"

let fetchdata= async (data:any)=>{
    let fetchdata = await fetch(data)
    let res = await fetchdata.json()
    return res.conversion_rates
}
let data = await fetchdata(apilink)
let countries = Object.keys(data)


let firstcountry = await inquirer.prompt({
    type:"list",
    name:"selectcountry",
    message:"Coverting from...",
    choices:countries
})
console.log(`Converting from ${chalk.redBright.bold(firstcountry.selectcountry)}`)
let money =await inquirer.prompt({
    type:"number",
    name:"money2",
    message:`Enter money in ${chalk.redBright.bold(firstcountry.selectcountry)} `,

})
console.log(money.money2)

let secondcountry = await inquirer.prompt({
    type:"list",
    name:"selectcountry",
    message:"Coverting to...",
    choices:countries
})

let cnv = `https://v6.exchangerate-api.com/v6/85e01c20b1849a99f1adaa79/pair/${firstcountry.selectcountry}/
${secondcountry.selectcountry}`
console.log(cnv)

let cnvdata= async (data:any)=>{
    let cnvdata = await fetch(data)
    let res = await cnvdata.json()
    return res.conversion_rate
}
let a = await cnvdata(cnv)

console.log(a)
let cnvrate = money.money2*a
console.log(`Your Converted currency is ${cnvrate}`)