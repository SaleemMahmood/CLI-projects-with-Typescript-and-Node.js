#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns"; //  installed date-fns library -->    npm i date-fns
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter No of seconds: ",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "Seconds must be below 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTme(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value + 2);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const diffSeconds = differenceInSeconds(intervalTime, currentTime);
        if (diffSeconds <= 0) {
            console.log(chalk.red(`Timer is over!`));
            process.exit();
        }
        const min = Math.floor((diffSeconds % (3600 * 24)) / 3600);
        const seconds = Math.floor(diffSeconds % 60);
        console.log(chalk.cyan(`${min.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`));
    }), 1000);
}
startTme(input);
