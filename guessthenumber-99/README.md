
This is a cli based number guessing game

// #!usr/bin/env node
// import inquirer from "inquirer";

// const randomNumber = Math.floor(Math.random() * 9 + 1)
// const answers = await inquirer.prompt([
//     {
//         name: "userNumber",
//         type: "number",
//         message: "Please guess a number between 0 and 10: "
//     }
// ])
// if(answers.userNumber == randomNumber) {
//     console.log(`Congratulation! you guessed the right number i.e. ${randomNumber}`)
// }else{
//     console.log(`You guesssed the wrong number. The right answer was ${randomNumber}`)
// }

// ---------------------------------------------------------------------------------------------
// import inquirer from "inquirer";


// let status = true
// while (status) {
//     const randomNumber = Math.floor(Math.random() * 9 + 1);
//     let answers = await inquirer.prompt([
//         {
//             name: "userNumber",
//             type: "number",
//             message: "Please guess a number between 0 and 10: ",
//         }
//     ])
//     if(answers.userNumber === randomNumber) {
//         status = false
//         console.log(`Congratulation! you guessed the right number i.e. ${randomNumber}`)
//     }else{
//         console.log(`You guesssed the wrong number. The right answer was ${randomNumber}`);
        
// }}

// -------------------------------------------------------------------------------------------------

// import inquirer from "inquirer";

// const randomNumber = Math.floor(Math.random() * 9 + 1);

// do {
//     let answers = await inquirer.prompt([
//         {
//             name: "userNumber",
//             type: "number",
//             message: "Please guess the number again between 0 and 10: ",
//         }
//     ])
//     if(answers.userNumber === randomNumber) {
//         console.log(`Congratulation! you guessed the right number i.e. ${randomNumber}`);
//         break;
//     }else if (answers.userNumber > randomNumber){
//         console.log(`Sorry, your guesssed number was high.`); 
//     } else{
//         console.log(`Sorry, your guesssed number was low.`);
// }} while (true)

// --------------------------------------------------------------------------------------------

