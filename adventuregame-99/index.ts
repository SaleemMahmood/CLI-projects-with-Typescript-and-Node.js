#!/usr/bin/env ts-node
import inquirer from "inquirer"
import chalk from "chalk"

class Player {
    name: string;
    fuel: number = 100;
    constructor (name: string) {
        this.name = name
    }
fuelDecrease() {
    let fuel = this.fuel - 25
    this.fuel = fuel
}

fuelIncrease() {
    this.fuel = 100
}

}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor (name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


let answer = await inquirer.prompt ([
    {
    name: "playerName",
    type: "input",
    message: "Please enter your name: "
    }])


    let condition = true
    while (condition) {


    let answer2 = await inquirer.prompt([
        {    
    name: "opponentName",
    type: "list",
    message: "Please select your opponent: ",
    choices: ["Skeltion", "Alien", "Zombie"]
    }
])

let p1 = new Player(answer.playerName)
let op = new Opponent(answer2.opponentName)


do{
if (answer2.opponentName === "Skeltion") {
    let ask = await inquirer.prompt ([{
        name : "options",
        type: "list",
        message: "What would you like to do? ",
        choices: ["Attack", "Get Energy", "Run for Life"]
    }]);
    if (ask.options === "Attack") {
        let number = Math.floor(Math.random() * 2)
        if(number < 1) {
            p1.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`));
            if(p1.fuel <= 0) {
                console.log(chalk.red(`You loose, better luck next time.`));
                break;
            } 
        } else {
            op.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`))
            if(op.fuel <= 0) {
                console.log(chalk.green(`Congratulation! you win.`))
                break;
            } 
        }
    }
    else if (ask.options === "Get Energy") {
        p1.fuelIncrease()
        console.log(chalk.green(`After your drink, your fuel is: ${p1.fuel}`));
        console.log(chalk.cyan(`current fuel of ${answer2.opponentName} is: ${op.fuel}`))
    } else {
        console.log(chalk.red(`You loose, better luck next time.`));
        break;
    }
}

if (answer2.opponentName === "Alien") {
    let ask = await inquirer.prompt ([{
        name : "options",
        type: "list",
        message: "What would you like to do? ",
        choices: ["Attack", "Get Energy", "Run for Life"]
    }]);
    if (ask.options === "Attack") {
        let number = Math.floor(Math.random() * 2)
        if(number < 1) {
            p1.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`))
            if(p1.fuel <= 0) {
                console.log(chalk.red(`You loose, better luck next time.`));
                break;
            } 
        } else {
            op.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`))
            if(op.fuel <= 0) {
                console.log(chalk.green(`Congratulation! you win.`))
                break;
            } 
        }
    }
    else if (ask.options === "Get Energy") {
        p1.fuelIncrease()
        console.log(chalk.green(`After your drink, your fuel is: ${p1.fuel}`));
        console.log(chalk.cyan(`current fuel of ${answer2.opponentName} is: ${op.fuel}`))
    } else {
        console.log(chalk.red(`You loose, better luck next time.`))
        break;
    }
}

if (answer2.opponentName === "Zombie") {
    let ask = await inquirer.prompt ([{
        name : "options",
        type: "list",
        message: "What would you like to do? ",
        choices: ["Attack", "Get Energy", "Run for Life"]
    }]);
    if (ask.options === "Attack") {
        let number = Math.floor(Math.random() * 2)
        if(number < 1) {
            p1.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`))
            if(p1.fuel <= 0) {
                console.log(chalk.red(`You loose, better luck next time.`));
                break;
            } 
        } else {
            op.fuelDecrease()
            console.log(chalk.cyan(`${answer.playerName} fuel is: ${p1.fuel}`));
            console.log(chalk.cyan(`${answer2.opponentName} fuel is: ${op.fuel}`))
            if(op.fuel <= 0) {
                console.log((chalk.green`Congratulation! you win.`))
                break;
            } 
        }
    }
    else if (ask.options === "Get Energy") {
        p1.fuelIncrease()
        console.log(chalk.green(`After your drink, your fuel is: ${p1.fuel}`));
        console.log(chalk.cyan(`current fuel of ${answer2.opponentName} is: ${op.fuel}`))
    } else {
        console.log(chalk.red(`You loose, better luck next time.`))
        break;
    }
}
}

while(true)

    let gameContinue = await inquirer.prompt ([{
        name : "continue",
        type: "confirm",
        message: "Do you want to play again? ",
        default: true
    }])
    
    condition = gameContinue.continue

}
 


//---------------------------------------------------------------------------------------

// import inquirer from "inquirer"

// let allchoices: string []= ["Skeltion", "Alien", "Zombie"]

// class Player {
//     name: string;
//     fuel: number = 100;
//     constructor (name: string) {
//         this.name = name
//     }
// fuelDecrease() {
//     let fuel = this.fuel - 25
//     this.fuel = fuel
// }

// fuelIncrease() {
//     this.fuel = 100
// }

// }

// class Opponent {
//     name: string;
//     fuel: number = 100;
//     constructor (name: string) {
//         this.name = name
//     }
//     fuelDecrease() {
//         let fuel = this.fuel - 25
//         this.fuel = fuel
//     }
// }

// let answer = await inquirer.prompt ([
//     {
//     name: "playerName",
//     type: "input",
//     message: "Please enter your name: "
//     },
//     {
//     name: "opponentName",
//     type: "list",
//     message: "Please select your opponent: ",
//     choices: allchoices
//     }
// ])

// let p1 = new Player(answer.playerName)
// let op = new Opponent(answer.opponentName)

// do{
// if (answer.opponentName === "Skeltion") {
//     let ask = await inquirer.prompt ([{
//         name : "options",
//         type: "list",
//         message: "What would you like to do? ",
//         choices: ["Attack", "Get Energy", "Run for Life"]
//     }]);
//     if (ask.options === "Attack") {
//         let number = Math.floor(Math.random() * 2)
//         if(number < 1) {
//             p1.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(p1.fuel <= 0) {
//                 console.log(`You loose, better luck next time.`)
//                 process.exit()
//             } 
//         } else {
//             op.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(op.fuel <= 0) {
//                 console.log(`Congratulation! you win.`)
//                 process.exit()
//             } 
//         }
//     }
//     else if (ask.options === "Get Energy") {
//         p1.fuelIncrease()
//         console.log(`After your drink, your fuel is: ${p1.fuel}`);
//         console.log(`current fuel of ${answer.opponentName} is: ${op.fuel}`)
//     } else {
//         console.log(`You loose, better luck next time.`)
//         process.exit()
//     }
// }

// if (answer.opponentName === "Alien") {
//     let ask = await inquirer.prompt ([{
//         name : "options",
//         type: "list",
//         message: "What would you like to do? ",
//         choices: ["Attack", "Get Energy", "Run for Life"]
//     }]);
//     if (ask.options === "Attack") {
//         let number = Math.floor(Math.random() * 2)
//         if(number < 1) {
//             p1.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(p1.fuel <= 0) {
//                 console.log(`You loose, better luck next time.`)
//                 process.exit()
//             } 
//         } else {
//             op.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(op.fuel <= 0) {
//                 console.log(`Congratulation! you win.`)
//                 process.exit()
//             } 
//         }
//     }
//     else if (ask.options === "Get Energy") {
//         p1.fuelIncrease()
//         console.log(`After your drink, your fuel is: ${p1.fuel}`);
//         console.log(`current fuel of ${answer.opponentName} is: ${op.fuel}`)
//     } else {
//         console.log(`You loose, better luck next time.`)
//         process.exit()
//     }
// }

// if (answer.opponentName === "Zombie") {
//     let ask = await inquirer.prompt ([{
//         name : "options",
//         type: "list",
//         message: "What would you like to do? ",
//         choices: ["Attack", "Get Energy", "Run for Life"]
//     }]);
//     if (ask.options === "Attack") {
//         let number = Math.floor(Math.random() * 2)
//         if(number < 1) {
//             p1.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(p1.fuel <= 0) {
//                 console.log(`You loose, better luck next time.`)
//                 process.exit()
//             } 
//         } else {
//             op.fuelDecrease()
//             console.log(`${answer.playerName} fuel is: ${p1.fuel}`);
//             console.log(`${answer.opponentName} fuel is: ${op.fuel}`)
//             if(op.fuel <= 0) {
//                 console.log(`Congratulation! you win.`)
//                 process.exit()
//             } 
//         }
//     }
//     else if (ask.options === "Get Energy") {
//         p1.fuelIncrease()
//         console.log(`After your drink, your fuel is: ${p1.fuel}`);
//         console.log(`current fuel of ${answer.opponentName} is: ${op.fuel}`)
//     } else {
//         console.log(`You loose, better luck next time.`)
//         process.exit()
//     }
// }
// }

// while(true)