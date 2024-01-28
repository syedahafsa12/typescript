

// import inquirer from "inquirer";

// interface Student {
//     name: string;
// }

// let students: Student[] = [
//     { name: "hafsa" },
//     { name: "abubakar" },
// ];

// let teachers = [{ name: "Miss Bushra", experience: 3, school: "Usman Public" }];
// let courses = ['Programming'];


// async function main(students: Student[]) {
//     do {

//         const check = await inquirer.prompt({
//             name: "check2",
//             type: "list",
//             message: "What you want to do?",
//             choices: ['Log In', 'Create new Student']
//         });

//         if (check.check2 == 'Log In') {
//             const check3 = await inquirer.prompt({
//                 name: "check4",
//                 type: "input",
//                 message: "Enter name:",
//             });

//             const enteredName = check3.check4;
//             const isNameValid = students.some(students => students.name === enteredName);

//             if (isNameValid) {
//                 console.log("Log in successful!");
//                 const todo = await inquirer.prompt({
//                     name: "q1",
//                     type: "list",
//                     message: "What do you want to do",
//                     choices: ['View Teacher', 'View Courses', 'View Students']
//                 });

//                 if (todo.q1 === 'View Teacher') {
//                     console.log(teachers);
//                 }
//                 if (todo.q1 === 'View Courses') {
//                     console.log(courses);
//                 } if (todo.q1 === 'View Students') {
//                     console.log(students);
                  
//                     console.log(newwstudent)
//                 }
//             } else {
//                 console.log("Invalid name.");
//             }

//             if (check.check2 == 'Create new Student') {
//                 let newStudent = await inquirer.prompt({
//                     type: "input",
//                     name: "newStudentName",
//                     message: "Enter your name:"
//                 });
//                 let newwstudent: any[] = []
//                 newwstudent.push({ name: newStudent.newStudentName });
//                 console.log(newwstudent)
//                 let validpin2 = students.some(students => newwstudent === enteredName);
//                 // console.log(students);
//                 const todo = await inquirer.prompt({
//                     name: "q1",
//                     type: "list",
//                     message: "What do you want to do",
//                     choices: ['View Teacher', 'View Courses', 'View Students']
//                 });

//                 if (todo.q1 === 'View Teacher') {
//                     console.log(teachers);
//                 }
//                 if (todo.q1 === 'View Courses') {
//                     console.log(courses);
//                 }
//                 if (todo.q1 === 'View Students') {
//                     console.log(students);
//                     console.log(newwstudent);
//                 }
//             }
//         }
//     }
//     while (true)
// }


// main(students);



import inquirer from "inquirer";

interface Student {
    name: string;
}

let students: Student[] = [
    { name: "hafsa" },
    { name: "abubakar" },
];

let teachers = [{ name: "Miss Bushra", experience: 3, school: "Usman Public" }];
let courses = ['Programming'];
let newwstudents: Student[] = []; // Array to store new students

async function main(students: Student[]) {
    do {
        const check = await inquirer.prompt({
            name: "check2",
            type: "list",
            message: "What you want to do?",
            choices: ['Log In', 'Create new Student']
        });

        if (check.check2 == 'Log In') {
            const check3 = await inquirer.prompt({
                name: "check4",
                type: "input",
                message: "Enter name:",
            });

            const enteredName = check3.check4;
            const isNameValidExisting = students.some(student => student.name === enteredName);
            const isNameValidNew = newwstudents.some(student => student.name === enteredName);

            if (isNameValidExisting || isNameValidNew) {
                console.log("Log in successful!");
                const todo = await inquirer.prompt({
                    name: "q1",
                    type: "list",
                    message: "What do you want to do",
                    choices: ['View Teacher', 'View Courses', 'View Students']
                });

                if (todo.q1 === 'View Teacher') {
                    console.log(teachers);
                }
                if (todo.q1 === 'View Courses') {
                    console.log(courses);
                }
                if (todo.q1 === 'View Students') {
                    console.log(students.concat(newwstudents));
                }
            } else {
                console.log("Invalid name.");
            }
        }

        if (check.check2 == 'Create new Student') {
            let newStudent = await inquirer.prompt({
                type: "input",
                name: "newStudentName",
                message: "Enter your name:"
            });

            // Create a new student object
            const newStudentObject: Student = { name: newStudent.newStudentName };

            // Push the new student to the newwstudents array
            newwstudents.push(newStudentObject);

            console.log("New student added!");
        }
    } while (true);
}

main(students);
