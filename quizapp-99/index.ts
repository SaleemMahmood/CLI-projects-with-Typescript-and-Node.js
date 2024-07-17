#!/usr/bin/env ts-node
import inquirer from "inquirer"
import chalk from "chalk";

const quiz: {
    question1 : String;
    question2 : String;
    question3 : String;
    question4 : String;
    question5 : String;
} = await inquirer.prompt ([
    {
        name: "question1",
        type: "list",
        message: "1.    What is 7 * 8? ",
        choices: ["14", "49", "56", "64"]
    },
    {
        name: "question2",
        type: "list",
        message: "2.    If you buy a shirt for $25 and a pair of shoes for $40, how much did you spend in total? ",
        choices: ["105", "40", "75", "65"]
    },
    {
        name: "question3",
        type: "list",
        message: "3.    How many sides does a triangle have? ",
        choices: ["3", "4", "5", "2"]
    },
    {
        name: "question4",
        type: "list",
        message: "4.    The bus leaves for school at 8:15 am. If it takes 20 minutes to get to school, what time will you arrive? ",
        choices: ["8.05 am", "8.25 am", "8.35 am", "8.45 am"]
    },
    {
        name: "question5",
        type: "list",
        message: "5.    The bus fare is $1.25 per ride. If you take the bus to school 5 days a week, how much will you spend on bus fare in total for a week? ",
        choices: ["$3.75", "$5", "$6.25", "$7.50"]
    }    
]);

let scrore: number = 0

switch (quiz.question1) {
    case "56" :
        console.log(chalk.green("1. Correct!"));
        ++scrore;
        break;
        default:
            console.log(chalk.red("1. Incorrect!"));
}

switch (quiz.question2) {
    case "65" :
        console.log(chalk.green("2. Correct!"));
        ++scrore;
        break;
        default:
            console.log(chalk.red("2. Incorrect!"))
}

switch (quiz.question3) {
    case "3" :
        console.log(chalk.green("3. Correct!"));
        ++scrore;
        break;
        default:
            console.log(chalk.red("3. Incorrect!"));
}

switch (quiz.question4) {
    case "8.35 am" :
        console.log(chalk.green("4. Correct!"));
        ++scrore;
        break;
        default:
            console.log(chalk.red("4. Incorrect!"));
}

switch (quiz.question5) {
    case "$6.25" :
        console.log(chalk.green("5. Correct!"));
        ++scrore;
        break;
        default:
            console.log(chalk.red("5. Incorrect!"));
}

console.log (chalk.blue(`Total Score: ${scrore}`));