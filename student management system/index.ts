#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "Chalk"
class School {
    name: string;
    students: Student []= [];
    courses: string []= ["Javascript", "Typescript", "Python"];

    addStudent(stuObj: Student) {
        this.students.push(stuObj)
    }
    constructor (name: string) {
        this.name = name
    }
}
let school = new School("Happy Learning")


let tuitionFees: {[key:string] : number} = {
    "Javascript" : 2000,
    "Typescript" : 3000,
    "Python" : 5000,
}

class Student {
    name: string;
    age: number;
    course: string;
    tuitionFee: number;


    
    constructor(
        name : string,
        age: number,
        course: string,
    ) 
        {
        this.name = name;
        this.age = age;
        this.course = course;
        this.tuitionFee = tuitionFees[course]
    }}

    console.log(chalk.green("Welcome to Student Management System"))

    let schoolManagementSystem = true
    while (schoolManagementSystem) {
    let mianScreen = await inquirer.prompt (
        [
            {
                name: "allFunction",
                message: "Please select your desired function.",
                type: "list",
                choices: ["Enroll Student", "Check Outstanding Balance", "Pay Outstanding Balance", "View Status", "Exit"],
            },
        ]
    );
if(mianScreen.allFunction === "Enroll Student") {

let addingStudents = true
while(addingStudents) {
let answer = await inquirer.prompt (
    [
        {
            name: "studentName",
            message: "Please enter student name: ",
            type: "input",
        },
        {
            name: "age",
            message: "Please enter your age: ",
            type: "number",
        },
        {
            name: "course",
            message: "Please enter your course: ",
            type: "list",
            choices: ["Javascript", "Typescript", "Python"],
        },
    ]
);

let s1 = new Student (answer.studentName, answer.age, answer.course)
school.addStudent(s1)
console.log(chalk.green("New Student has been added successfully."))


let addingMoreStudents = await inquirer.prompt ( 
    {
        name: "addStudents",
        message: "Do you want to add more student? ",
        type: "confirm",
        default: true
      })

      addingStudents = addingMoreStudents.addStudents
    }}
    else if (mianScreen.allFunction === "Check Outstanding Balance") {
        if (school.students.length > 0) {
        
    let checkOutstandingBalance = school.students.forEach((student) => {
       console.log(chalk.cyan(`Student Name: ${student.name}, Outstanding Tuition Fee: ${student.tuitionFee}`));
    })
} else {
    console.log(chalk.red(`No record found!`))
}
} else if (mianScreen.allFunction === "Pay Outstanding Balance") {
    if (school.students.length > 0) {
    let selectPaymentStudent = await inquirer.prompt ( 
        {
            name: "selectStudent",
            message: "Please select the student for payment? ",
            type: "list",
            choices: school.students.map((student) => student.name)
          })

          let selectedStudent: any = school.students.find((student) => student.name === selectPaymentStudent.selectStudent);

          let tuitionFee = selectedStudent?.tuitionFee;
          console.log(chalk.yellow(`Outstanding fee is: ${tuitionFee}`))
          if (selectedStudent.tuitionFee > 0) {

          let proceedForPayment = await inquirer.prompt ( [
            {
                name: "payment",
                message: "Do you porceed for payment? ",
                type: "confirm",
                default: true
              },

                {
                    name: "paymentMethod",
                    message: "Please select payment method? ",
                    type: "list",
                    choices: ["Online Transfer", "Jazz Cash", "Easy Paisa"]
                  }])

                if (proceedForPayment.payment) {
                
            console.log(chalk.green(`${selectedStudent.name} has successfully transferred ${tuitionFee} through ${proceedForPayment.paymentMethod}`));
            console.log(chalk.green(`${selectedStudent.name} enrollment is now confirmed in ${selectedStudent?.course}`));
               selectedStudent.tuitionFee = 0   
                }
            } else {
                console.log(chalk.green(`You have already paid your course fee.`))
            }
    } else {
        console.log(chalk.red(`No record found!`))
    }

    } else if (mianScreen.allFunction === "View Status") { 
        if (school.students.length > 0) {
        let viewStatus = school.students.forEach((student) => {
            console.log(chalk.cyan(`Student Name: ${student.name}, course : ${student.course} Outstanding Tuition Fee: ${student.tuitionFee}`));
    })
        } else {
            console.log(`No record found!`)
        }
} else {

let exitFunction = await inquirer.prompt ( 
    {
        name: "exit",
        message: "Do you want to exit Student Management System? ",
        type: "confirm",
        default: true
    }

    )
    schoolManagementSystem = !exitFunction.exit

    }
}

//--------------------------------------------------------------------------------------------------

    // let status = school.students.forEach((student) => {
    //     console.log(`Student Name: ${student.name}, Student Course: ${student.course}, Tuition Fee: ${student.tuitionFee}`);
    // })


// let randomNumber: number = Math.floor(Math.random() * 100000)
// let myBalance: number = 0
// let answer = await inquirer.prompt (
//     [
//         {
//             name: "studentName",
//             message: "Please enter student name: ",
//             type: "input",
//         },
//         {
//             name: "Course",
//             message: "Please enter your course: ",
//             type: "list",
//             choices: ["Javascript", "Typescript", "Python"]
//         },
//     ]
// );

// const tuitionFee: {[key:string]: number} = {
//     "Javascript" : 2000,
//     "Typescript" : 3000,
//     "Python" : 5000,
// }
// const courseTuitionFee = tuitionFee[answer.Course];

// console.log(`Tuition fee of your course "${answer.Course}" is ${courseTuitionFee}.`)

// let payment = await inquirer.prompt (
//     [
//         {
//             name: "paymentType",
//             message: "Please select the method of payment: ",
//             type: "list",
//             choices: ["Online Bank Transfer", "Jazz Cash", "Esay Paisa"]
//         }
//     ]
// )

// console.log(`You have successfully transferred ${courseTuitionFee} through ${payment.paymentType}. You are now enrolled in ${answer.studentCourse}`)

// let mainScreen = await inquirer.prompt (
//     [
//         {
//             name: "view",
//             message: "Which function do you want to perform? ",
//             type: "list",
//             choices: ["View Status", "Exit"]
//         }
//     ]
// )
// if (mainScreen.view === "View Status") {
//     console.log(`Status
//     Student Name: ${answer.studentName}
//     Student ID: ${randomNumber}
//     Student Course: ${answer.Course}
//     Course Fee: ${courseTuitionFee}
//     Fee payment method: ${payment.paymentType}
//     `)
// } else {
//     console.log(`exit from student management system`)
// }