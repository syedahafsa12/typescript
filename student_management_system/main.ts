import inquirer from "inquirer";

interface Student {
  name: string;
  school: string;
}

interface Teacher {
  name: string;
  experience: number;
  school: string;
}

let students: Student[] = [
  { name: "hafsa", school: "Usman Public" },
  { name: "abubakar", school: "Beacon House" },
  {name:"",school:""}
];

let teachers: Teacher[] = [{ name: "Bushra", experience: 3, school: "Usman Public" }];
let courses = ['Programming'];
async function main() {
    const todo = await inquirer.prompt({
      name: "q1",
      type: "list",
      message: "What do you want to do",
      choices: ['View Teacher', 'View Courses']
    });
  
    if (todo.q1 === 'View Teacher') {
      console.log(teachers);
    }
    if (todo.q1 === 'View Courses') {
      console.log(courses);
    } 
  }

async function authenticateStudent(): Promise<void> {
  const enterName = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name!"
  });
const authenticatedStudent2 = students.find(student => newStudent.name === enterName.name);
  const authenticatedStudent = students.find(student => student.name === enterName.name)
  if (authenticatedStudent) {
    console.log(`Welcome, ${authenticatedStudent.name}!`);
    await main()
  } else {
    if(authenticatedStudent2){
        console.log(`Welcome, ${authenticatedStudent2.name}!`);
        await main()
    }else{
    console.log("Access denied.");}

    const createNew = await inquirer.prompt({
      type: "list",
      name: "createnew",
      message: "Do you want to create a new student?",
     choices:['yes','no']
    });
    
    if (createNew.createnew=='yes') {
      const newStudent = await createNewStudent();
      console.log(`Welcome, ${newStudent.name}! You are now a registered student.`);
  await main()
    }else{
        console.log()
    }
  }
}

const studentInfo = await inquirer.prompt([
    // { name: "name", 
    // type: "input",
    //  message: "Enter your name:" },
    { name: "school",
     type: "input",
      message: "Enter your school:" }
  ]);
  const newStudent: Student = {
    name: studentInfo.name,
    school: studentInfo.school
  };

  students.push(newStudent);
 
async function createNewStudent(): Promise<Student> {
    const newstudentmaking = await inquirer.prompt([
        { name: "name", 
        type: "input",
         message: "Enter your name:" },
        { name: "school",
         type: "input",
          message: "Enter your school:" }
      ]);
      const newstudentmaking2: Student = {
        name: newstudentmaking.name,
        school: newstudentmaking.school
      };
  students.push(newStudent);
  students.push(newstudentmaking2)
  students.push(newstudentmaking.name)
//   console.log(newStudent)
  return newstudentmaking2;
  
}

await authenticateStudent();

