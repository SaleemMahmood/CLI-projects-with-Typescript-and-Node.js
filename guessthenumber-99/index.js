#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue(`Welcome to Number Guessing Game!`));
let condition = true;
while (condition) {
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    let answer = await inquirer.prompt([
        {
            name: "userNumber",
            type: "number",
            message: "Please guess the number between 0 and 10: ",
        }
    ]);
    if (answer.userNumber === randomNumber) {
        console.log(chalk.green(`Congratulation! you guessed the right number i.e. ${randomNumber}`));
    }
    else if (answer.userNumber > randomNumber) {
        console.log(chalk.red(`Sorry, your guesssed number was high.`));
    }
    else if (answer.userNumber < randomNumber) {
        console.log(chalk.red(`Sorry, your guesssed number was low.`));
    }
    if (answer.userNumber !== randomNumber) {
        do {
            let answers = await inquirer.prompt([
                {
                    name: "userNumber",
                    type: "number",
                    message: "Please guess the number again between 0 and 10: ",
                }
            ]);
            if (answers.userNumber > randomNumber) {
                console.log(chalk.red(`Sorry, your guesssed number was high.`));
            }
            else if (answers.userNumber < randomNumber) {
                console.log(chalk.red(`Sorry, your guesssed number was low.`));
            }
            else if (answers.userNumber === randomNumber) {
                console.log(chalk.green(`Congratulation! you guessed the right number i.e. ${randomNumber}`));
                break;
            }
        } while (true);
    }
    let gameContinue = await inquirer.prompt([{
            name: "continue",
            type: "confirm",
            message: "Do you want to play again? ",
            default: true
        }]);
    condition = gameContinue.continue;
}
