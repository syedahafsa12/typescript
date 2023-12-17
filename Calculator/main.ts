

var prompt = require('prompt-sync')();
let n1 = parseInt(prompt('Please Enter your First Number:'))
let n2 = parseInt(prompt('Please Enter your Second Number:'))
let Operation = prompt("Write any 1 Operation from the following:(+,-,*,/):")
if(Operation=="+"){
    console.log(`Your Answer is ${n1} ${Operation} ${n2} = ${n1 + n2} `)
}
else if(Operation=="-"){
    console.log(`Your Answer is ${n1} ${Operation} ${n2} = ${n1 - n2} `)
}
else if(Operation=="/"){
    console.log(`Your Answer is ${n1} ${Operation} ${n2} = ${n1 / n2} `)
}
else if(Operation=="*"){
    console.log(`Your Answer is ${n1} ${Operation} ${n2} = ${n1 * n2} `)
}else{
    console.log("Please select the correct operator")
}

export{};

