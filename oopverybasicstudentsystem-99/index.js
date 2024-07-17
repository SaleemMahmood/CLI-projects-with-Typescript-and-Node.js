#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log(chalk.green(`Welcome to Basic Student Management System!`));
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Please select your desired option? ",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log(chalk.cyan(`For any information about school Staff, please contact staff room personally!`));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "studentName",
                type: "input",
                message: "Please enter the desired student name? "
            });
            const student = persons.students.find(value => value.name == ans.studentName);
            if (!student) {
                const name = new Student(ans.studentName);
                persons.addStudent(name);
                console.log(chalk.green(`${name.name} has been added successfully`));
                console.log(chalk.yellow(`Current students list is given below.`));
                console.log(chalk.cyan(`Student Names: `));
                let viewStatus = persons.students.forEach((student) => {
                    console.log(chalk.green(`${student.name}`));
                });
            }
            else {
                console.log(chalk.red(`${student.name} already exists! `));
                console.log(chalk.yellow(`Current students list is given below.`));
                console.log(chalk.cyan(`Student Names: `));
                let viewStatus = chalk.cyan(persons.students.forEach((student) => {
                    console.log(chalk.green(`${student.name}`));
                }));
            }
        }
        else {
            console.log(chalk.blue(`Exiting the progeam...`));
            process.exit();
        }
    } while (true);
};
programStart(persons);
