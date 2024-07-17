#!/usr/bin/env ts-node
    import inquirer from "inquirer"
    import chalk from "chalk"

interface BankAccount {
    accountNumber: number,
    balance: number,
    withdraw(amount: number): void,
    deposit(amount: number): void,
    checkBalance(): void
}

class BankAccountDetail implements BankAccount {
    accountNumber: number;
    balance: number;
    constructor (accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log(chalk.green(`Your withdeawal of $${amount} is successfull.`))
            console.log(chalk.cyan(`Your remaining balance is: $${this.balance}`))
        } else {
            console.log(chalk.red(`Insufficient Balance`))
        }
    }
    deposit(amount: number): void {
        if (amount > 100) {
            this.balance += amount - 1  // $1 fee will be charged for deposit of more than $100.
            console.log(chalk.green(`Deposit of $${amount} is successfull.`))
            console.log(chalk.cyan(`Your current balance is: $${this.balance}`))
        } else {
            this.balance += amount
            console.log(chalk.green(`Deposit of $${amount} is successfull.`))
            console.log(chalk.cyan(`Your current balance is: $${this.balance}`))
        }
    }
    checkBalance(): void {
        console.log(chalk.cyan(`Your current balance is $${this.balance}`))
    }
}

class Customer {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccountDetail

    constructor (
        firstName: string,
        lastName: string,
        gender: string,
        age: number,
        mobileNumber: number,
        account: BankAccountDetail
    )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account
    }
}


async function bankService() {
    let customersadd: Customer[] = [];
    console.log(chalk.blue(`Welcome to our banking service!`))
    console.log(chalk.yellow(`Please enter account hoder details: `))
    let condition = true
    while (condition) {

    let customerName = await inquirer.prompt ([{
        name: "firstname",
        type: "string",
        message: "Please enter your first name: "
    },
    {
        name: "lastname",
        type: "string",
        message: "Please enter your last name: "
    },{
        name: "gender",
        type: "string",
        message: "Please enter your gender: "
    },{
        name: "mobilenumber",
        type: "number",
        message: "Please enter your mobile mumber: "
    },{
        name: "accountnumber1",
        type: "number",
        message: "Please enter your account number: "
    },{
        name: "initialdeposit",
        type: "number",
        message: "Please enter your initial deposit: "
    },
]);


let accountdetail: BankAccountDetail = new BankAccountDetail(customerName.accountnumber1, customerName.initialdeposit)

    let newcustomers: Customer =  new Customer(customerName.firstname, customerName.lastname, customerName.gender, customerName.age, customerName.mobileNumber, accountdetail);
   
    customersadd.push(newcustomers);
    let furtheraddition = await inquirer.prompt (
        {
            name: "accountholder",
            type: "confirm",
            message: "Do you wnat to add more bank account holder: "
    })
    condition = furtheraddition.accountholder
 };
 let condition4 = true
 while (condition4) {
        let bankapp = await inquirer.prompt ({
            name: "options",
            type: "confirm",
            message: "Do you want to perform banking oprations? ",
        })

        if (bankapp.options = true) {
           
                console.log(chalk.blue(`Welcome to specific bank account operations`))
    const accountNumberInput = await inquirer.prompt ({
        name: "accountNumber",
        type: "number",
        message: "Please enter your bank account number: "
    })

    let accountNumberMatch: any = customersadd.find(customersadd => customersadd.account.accountNumber === accountNumberInput.accountNumber);
      
    if(accountNumberMatch){
       
        console.log(chalk.green(`Welcome ${accountNumberMatch.firstName} ${accountNumberMatch.lastName}`))
        let condition3 = true

        while(condition3) {
        const ans = await inquirer.prompt ({
            name: "selectOperation",
            type: "list",
            message: "Please select your desired option? ",
            choices: ["Deposit", "Withdrawal", "Check Balance"]
        })
        switch (ans.selectOperation) {
            case "Deposit" :
                const depositAmount = await inquirer.prompt ({
                    name: "amount",
                    type: "number",
                    message: "Please enter the amount you wish to deposit: "
                });
                accountNumberMatch.account.deposit(depositAmount.amount)
                break;
        case "Withdrawal" :
            const withdrawAmount = await inquirer.prompt ({
                name: "amount",
                type: "number",
                message: "Please enter the amount you wish to withdraw: "
            });
            accountNumberMatch.account.withdraw(withdrawAmount.amount)
            break;
        case "Check Balance" :
            accountNumberMatch.account.checkBalance();
            break;
        }
        let finalquestion = await inquirer.prompt ({
            name: "answer",
            type: "confirm",
            message: "Do you want to perofrm another transaction? "
        })

        condition3 = finalquestion.answer
    }

    } else {
        console.log(`Invalid account number. Please try again...`)
    } 
}
    let finalquestion2 = await inquirer.prompt ({
        name: "answer",
        type: "confirm",
        message: "Do you want to continue with other bank account? "
    })
    condition4 = finalquestion2.answer
}; 
}

    bankService()