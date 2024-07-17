#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
const welcome = chalk.blue('Calculator!');
console.log(welcome);
let calculation = true;
while (calculation) {
    const answer = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Please enter your first number: ",
            type: "number",
        },
        {
            name: "secondNumber",
            message: "Please enter your second number: ",
            type: "number",
        },
        {
            name: "operator",
            message: "Please select one of the mathemical operation to perform: ",
            type: "list",
            choices: ["Addition (+)", "Substraction (-)", "Multiplication (*)", "Division (/)"]
        },
    ]);
    if (answer.operator === "Addition (+)") {
        console.log(chalk.green(`Your answer is: ${(answer.firstNumber) + (answer.secondNumber)}`));
    }
    else if (answer.operator === "Substraction (-)") {
        console.log(chalk.green(`Your answer is: ${(answer.firstNumber) - (answer.secondNumber)}`));
    }
    else if (answer.operator === "Multiplication (*)") {
        console.log(chalk.green(`Your answer is: ${(answer.firstNumber) * (answer.secondNumber)}`));
    }
    else if (answer.operator === "Division (/)") {
        console.log(chalk.green(`Your answer is: ${(answer.firstNumber) / (answer.secondNumber)}`));
    }
    else {
        console.log(chalk.red("Error with code"));
    }
    const continueCalculation = await inquirer.prompt({
        name: "more",
        message: "Do you want to continue? ",
        type: "confirm",
        default: true
    });
    calculation = continueCalculation.more;
}
