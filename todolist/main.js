import inquirer from "inquirer";
let todos = ["Hafsa", "Abubakar"];
async function createtodo(todos) {
    do {
        let welcome = console.log("Hi, Welcome to Todo App");
        // console.log(welcome);
        let ans = await inquirer.prompt({
            type: "list",
            name: "operation",
            message: "What you want to do?",
            choices: ["Add", "View", "Delete", "Update"]
        });
        console.log(ans);
        if (ans.operation === "Add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item",
                name: "additem"
            });
            todos.push(addtodo.additem);
        }
        if (ans.operation === "View") {
            console.log(todos);
        }
        if (ans.operation === "Delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                name: "deleteitem",
                message: "Select item to delete",
                choices: todos.map(item => item)
            });
            let newtodos = todos.filter(val => val != deletetodo.deleteitem);
            todos = [...newtodos];
            console.log(todos);
        }
        if (ans.operation === "Update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                name: "updateitem",
                message: "Select item to update",
                choices: todos.map(item => item)
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item to update",
                name: "additem"
            });
            let newtodos = todos.filter(val => val != updatetodo.updateitem);
            todos = [...newtodos, addtodo.additem];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
