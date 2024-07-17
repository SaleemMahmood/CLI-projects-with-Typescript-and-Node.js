#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
const currencyTable = {
    US_Dollar: 1,
    UK_GBP: 0.80,
    Euro: 0.94,
    Japenese_Yen: 153,
    Pakistani_Rs: 280
};
console.log(chalk.blue(`Welcome to Currency Converter!`));
let moreConversion = true;
while (moreConversion) {
    let currencyToConvert = await inquirer.prompt([
        {
            name: "currency1",
            message: "Please select the currency before conversion?",
            type: "list",
            choices: ["US_Dollar", "UK_GBP", "Euro", "Japenese_Yen", "Pakistani_Rs"],
        },
        {
            name: "currency2",
            message: "Please select the currency after conversion?",
            type: "list",
            choices: ["US_Dollar", "UK_GBP", "Euro", "Japenese_Yen", "Pakistani_Rs"],
        },
        {
            name: "amount",
            message: "Please enter the amount you want to convert?",
            type: "number",
        },
    ]);
    let fromCurrency = currencyTable[currencyToConvert.currency1];
    let toCurrency = currencyTable[currencyToConvert.currency2];
    let userAmount = currencyToConvert.amount;
    let convertedBaseCurrency = userAmount / fromCurrency;
    let convertedAmount = (convertedBaseCurrency * toCurrency).toFixed(2);
    console.log(chalk.green(`Your ${currencyToConvert.currency1} ${userAmount} is equal to ${currencyToConvert.currency2} ${convertedAmount}`));
    let continueConversion = await inquirer.prompt({
        name: "askMoreConversion",
        message: "Do you want to continue?",
        type: "confirm",
        default: true
    });
    moreConversion = continueConversion.askMoreConversion;
}
//-----------------------------------------------------------------------------------------------------
// import inquirer from "inquirer";
// let moreConversion = true
// while(moreConversion) {
// let currencyToConvert = await inquirer.prompt([
//   {
//     name: "currency1",
//     message: "Please select the currency before conversion?",
//     type: "list",
//     choices: ["US $", "UK £", "Euro €", "Japenese ¥", "Pakistani Rs"],
//   },
//   {
//     name: "currency2",
//     message: "Please select the currency after conversion?",
//     type: "list",
//     choices: ["US $", "UK £", "Euro €", "Japenese ¥", "Pakistani Rs"],
//   },
//   {
//     name: "amount",
//     message: "Please enter the amount you want to convert?",
//     type: "number",
//   },
// ]);
// if (currencyToConvert.currency1 === "US $") {
//     if(currencyToConvert.currency2 === "UK £") {
//         console.log(`The $${currencyToConvert.amount} is uqual to £${(currencyToConvert.amount) * (0.79)}.`)
//     } else if (currencyToConvert.currency2 === "Euro €") {
//         console.log(`The $${currencyToConvert.amount} is uqual to €${(currencyToConvert.amount) * (0.92)}.`)
//     } else if (currencyToConvert.currency2 === "Japenese ¥") {
//         console.log(`The $${currencyToConvert.amount} is uqual to ¥${(currencyToConvert.amount) * (152)}.`)
//     } else if (currencyToConvert.currency2 === "Pakistani Rs") {
//         console.log(`The $${currencyToConvert.amount} is uqual to Rs.${(currencyToConvert.amount) * (278)}.`)
//     } else {
//         console.log(`The $${currencyToConvert.amount} is uqual to $${(currencyToConvert.amount) * (1)}.`)
//     }
// } else if (currencyToConvert.currency1 === "UK £") {
//     if(currencyToConvert.currency2 === "US $") {
//         console.log(`The £${currencyToConvert.amount} is uqual to $${(currencyToConvert.amount) * (1.27)}.`)
//     } else if (currencyToConvert.currency2 === "Euro €") {
//         console.log(`The £${currencyToConvert.amount} is uqual to €${(currencyToConvert.amount) * (1.17)}.`)
//     } else if (currencyToConvert.currency2 === "Japenese ¥") {
//         console.log(`The £${currencyToConvert.amount} is uqual to ¥${(currencyToConvert.amount) * (192)}.`)
//     } else if (currencyToConvert.currency2 === "Pakistani Rs") {
//         console.log(`The £${currencyToConvert.amount} is uqual to Rs.${(currencyToConvert.amount) * (352)}.`)
//     } else {
//         console.log(`The £${currencyToConvert.amount} is uqual to £${(currencyToConvert.amount) * (1)}.`)
//     }
// } else if (currencyToConvert.currency1 === "Euro €") {
//     if(currencyToConvert.currency2 === "US $") {
//         console.log(`The €${currencyToConvert.amount} is uqual to $${(currencyToConvert.amount) * (1.087)}.`)
//     } else if (currencyToConvert.currency2 === "UK £") {
//         console.log(`The €${currencyToConvert.amount} is uqual to £${(currencyToConvert.amount) * (0.858)}.`)
//     } else if (currencyToConvert.currency2 === "Japenese ¥") {
//         console.log(`The €${currencyToConvert.amount} is uqual to ¥${(currencyToConvert.amount) * (165)}.`)
//     } else if (currencyToConvert.currency2 === "Pakistani Rs") {
//         console.log(`The €${currencyToConvert.amount} is uqual to Rs.${(currencyToConvert.amount) * (302)}.`)
//     } else {
//         console.log(`The €${currencyToConvert.amount} is uqual to €${(currencyToConvert.amount) * (1)}.`)
//     }
// }  else if (currencyToConvert.currency1 === "Japenese ¥") {
//     if(currencyToConvert.currency2 === "US $") {
//         console.log(`The ¥${currencyToConvert.amount} is uqual to $${(currencyToConvert.amount) * (0.0066)}.`)
//     } else if (currencyToConvert.currency2 === "UK £") {
//         console.log(`The ¥${currencyToConvert.amount} is uqual to £${(currencyToConvert.amount) * (0.0052)}.`)
//     } else if (currencyToConvert.currency2 === "Euro €") {
//         console.log(`The ¥${currencyToConvert.amount} is uqual to €${(currencyToConvert.amount) * (0.0061)}.`)
//     } else if (currencyToConvert.currency2 === "Pakistani Rs") {
//         console.log(`The ¥${currencyToConvert.amount} is uqual to Rs.${(currencyToConvert.amount) * (1.833)}.`)
//     } else {
//         console.log(`The ¥${currencyToConvert.amount} is uqual to ¥${(currencyToConvert.amount) * (1)}.`)
//     }
// }  else if (currencyToConvert.currency1 === "Pakistani Rs") {
//     if(currencyToConvert.currency2 === "US $") {
//         console.log(`The Rs.${currencyToConvert.amount} is uqual to $${(currencyToConvert.amount) * (0.0036)}.`)
//     } else if (currencyToConvert.currency2 === "UK £") {
//         console.log(`The Rs.${currencyToConvert.amount} is uqual to £${(currencyToConvert.amount) * (0.00284)}.`)
//     } else if (currencyToConvert.currency2 === "Euro €") {
//         console.log(`The Rs.${currencyToConvert.amount} is uqual to €${(currencyToConvert.amount) * (0.00331)}.`)
//     } else if (currencyToConvert.currency2 === "Japenese ¥") {
//         console.log(`The Rs.${currencyToConvert.amount} is uqual to ¥${(currencyToConvert.amount) * (0.5456)}.`)
//     } else {
//         console.log(`The Rs.${currencyToConvert.amount} is uqual to Rs.${(currencyToConvert.amount) * (1)}.`)
//     }
// } else {
//     console.log(`Error in code`)
// };
// let continueConversion = await inquirer.prompt(
//     {
//       name: "askMoreConversion",
//       message: "Do you want to continue?",
//       type: "confirm",
//       default: false
//     })
//     moreConversion = continueConversion.askMoreConversion
// }
// ---------------------------------------------------------------------------------------------------
