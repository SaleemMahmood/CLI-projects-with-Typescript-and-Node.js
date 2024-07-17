#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 1000;
let myPin = 2233;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please enter your pin number: ",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct pin number!"));
    let atmFunctions = true;
    while (atmFunctions) {
        let operationAns = await inquirer.prompt({
            name: "operation",
            message: "Please select one of the following option?",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        });
        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt({
                name: "amount",
                message: "Please enter your amount",
                type: "number"
            });
            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log(chalk.blue(`Your remaining balance is: ${myBalance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        }
        else if (operationAns.operation === "Check Balance") {
            console.log(chalk.blue(`Your balance is: ${myBalance}`));
        }
        else if (operationAns.operation === "Fast Cash") {
            let fastCashAns = await inquirer.prompt({
                name: "fastCash",
                message: "Please select one of the following option?",
                type: "list",
                choices: ["100", "200", "500"]
            });
            if (fastCashAns.fastCash === "100") {
                myBalance -= 100;
                console.log(chalk.blue(`Your balance is: ${myBalance}`));
            }
            else if (fastCashAns.fastCash === "200") {
                myBalance -= 200;
                console.log(chalk.blue(`Your balance is: ${myBalance}`));
            }
            else if (fastCashAns.fastCash === "500") {
                myBalance -= 500;
                console.log(chalk.blue(`Your balance is: ${myBalance}`));
            }
            else {
                console.log(chalk.red("Error in code"));
            }
        }
        ;
        const continueatm = await inquirer.prompt({
            name: "more",
            message: "Do you want to perform another function? ",
            type: "confirm",
            default: true
        });
        atmFunctions = continueatm.more;
    }
}
else {
    console.log(chalk.red("Incorrect pin number!"));
}
