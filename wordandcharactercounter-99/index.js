#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
let sentence = await inquirer.prompt({
    name: "answer",
    message: "Please write your sentence to count the words and characters: ",
    type: "input"
});
let wordsCount = sentence.answer.trim().split(/\s+/).filter((word) => word !== '').length;
let totalCharCount = sentence.answer.trim().length;
let spaceCount = sentence.answer.trim().match(/\s/g).length;
let charCount = totalCharCount - spaceCount;
console.log(chalk.cyan(`Total no of words in your paragraph are: ${wordsCount}`));
// console.log(`Total no of characters including spaces are: ${totalCharCount}`)
// console.log(`Total no of spaces are: ${spaceCount}`)
console.log(chalk.magenta(`Total no of characters in your paragraph are: ${charCount}`));
