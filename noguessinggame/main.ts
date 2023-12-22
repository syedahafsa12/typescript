import inquirer from "inquirer"

type ans = {
    userguess :number
} 
const systemgeneratedno = Math.floor(Math.random()*10)
const answer:ans = await inquirer.prompt([{
    type:"number",
    name:"userguess",
    message:"Enter your guess b/w 1 to 10"
}])
const {userguess} = answer;
console.log(`your guess, ${userguess}, System,${systemgeneratedno}`)
if(userguess==systemgeneratedno){
console.log("Yay! Your Answer is correct \n you win")
}else{
    console.log("Try again better luck next time!")
}