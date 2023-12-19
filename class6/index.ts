import inquirer from "inquirer" ; 

let answer= await inquirer.prompt({
    type:'input',
    name:'first name',
    message: 'whats your first name?';

})

//ziyada sawal array me likh sakte hen