// import inquirer from "inquirer"

// interface BankAccount {
//     accountNumber: number,
//     balance: number,
//     withdraw(amount: number): void,
//     deposit(amount: number): void,
//     checkBalance(): void
// }

// class BankAccountDetail implements BankAccount {
//     accountNumber: number;
//     balance: number;
//     constructor (accountNumber: number, balance: number) {
//         this.accountNumber = accountNumber;
//         this.balance = balance
//     }
//     withdraw(amount: number): void {
//         if (this.balance >= amount) {
//             this.balance -= amount
//             console.log(`Your withdeawal of $${amount} is successfull.`)
//             console.log(`Your remaining balance is: $${this.balance}`)
//         } else {
//             console.log(`Insufficient Balance`)
//         }
//     }
//     deposit(amount: number): void {
//         if (amount > 100) {
//             this.balance += amount - 1  // $1 fee will be charged for deposit of more than $100.
//             console.log(`Deposit of $${amount} is successfull.`)
//             console.log(`Your current balance is: $${this.balance}`)
//         } else {
//             this.balance += amount
//             console.log(`Deposit of $${amount} is successfull.`)
//             console.log(`Your current balance is: $${this.balance}`)
//         }
//     }
//     checkBalance(): void {
//         console.log(`Your current balance is $${this.balance}`)
//     }
// }

// class Customer {
//     firstName: string;
//     lastName: string;
//     gender: string;
//     age: number;
//     mobileNumber: number;
//     account: BankAccountDetail

//     constructor (
//         firstName: string,
//         lastName: string,
//         gender: string,
//         age: number,
//         mobileNumber: number,
//         account: BankAccountDetail
//     )
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//         this.mobileNumber = mobileNumber;
//         this.account = account
//     }
// }

// const accounts: BankAccountDetail[] = [
//     new BankAccountDetail(1001, 500),
//     new BankAccountDetail(1002, 2000),
//     new BankAccountDetail(1003, 1500)
// ]

// const customers: Customer[] = [
//     new Customer("saleem", "mahmood", "male", 38, 3126545345, accounts[0]),
//     new Customer("shanzay", "alina", "felame", 45, 3126121223, accounts[1]),
//     new Customer("hashim", "mahmood", "male", 4, 3126545333, accounts[2])
// ];

// async function bankService() {
//     do {
//     const accountNumberInput = await inquirer.prompt ({
//         name: "accountNumber",
//         type: "number",
//         message: "Please enter your bank account number: "
//     })

//     const accountNumberMatch = customers.find(customers => customers.account.accountNumber === accountNumberInput.accountNumber)
//     if(accountNumberMatch){
        
//         console.log(`Welcome ${accountNumberMatch.firstName} ${accountNumberMatch.lastName}`)

//         do {
//         const ans = await inquirer.prompt ({
//             name: "selectOperation",
//             type: "list",
//             message: "Please select your desired option? ",
//             choices: ["Deposit", "Withdrawal", "Check Balance", "Exit"]
//         })
//         switch (ans.selectOperation) {
//             case "Deposit" :
//                 const depositAmount = await inquirer.prompt ({
//                     name: "amount",
//                     type: "number",
//                     message: "Please enter the amount you wish to deposit: "
//                 });
//                 accountNumberMatch.account.deposit(depositAmount.amount)
//                 break;
//         case "Withdrawal" :
//             const withdrawAmount = await inquirer.prompt ({
//                 name: "amount",
//                 type: "number",
//                 message: "Please enter the amount you wish to withdraw: "
//             });
//             accountNumberMatch.account.withdraw(withdrawAmount.amount)
//             break;
//         case "Check Balance" :
//             accountNumberMatch.account.checkBalance();
//             break;
//             case "Exit" :
//                 console.log(`Thank you for using our bank services. Have a nice day! `)
//                 console.log(`Exiting...`);
//                 return;  
//         }
//     } while (true)

//     } else {
//         console.log(`Invalid account number. Please try again...`)
//     }
// } while (true)

//     }

//     bankService()
    //-------------------------------------------------------------------------------------------------------

//     import inquirer from "inquirer"

// interface BankAccount {
//     accountNumber: number,
//     balance: number,
//     withdraw(amount: number): void,
//     deposit(amount: number): void,
//     checkBalance(): void
// }

// class BankAccountDetail implements BankAccount {
//     accountNumber: number;
//     balance: number;
//     constructor (accountNumber: number, balance: number) {
//         this.accountNumber = accountNumber;
//         this.balance = balance
//     }
//     withdraw(amount: number): void {
//         if (this.balance >= amount) {
//             this.balance -= amount
//             console.log(`Your withdeawal of $${amount} is successfull.`)
//             console.log(`Your remaining balance is: $${this.balance}`)
//         } else {
//             console.log(`Insufficient Balance`)
//         }
//     }
//     deposit(amount: number): void {
//         if (amount > 100) {
//             this.balance += amount - 1  // $1 fee will be charged for deposit of more than $100.
//             console.log(`Deposit of $${amount} is successfull.`)
//             console.log(`Your current balance is: $${this.balance}`)
//         } else {
//             this.balance += amount
//             console.log(`Deposit of $${amount} is successfull.`)
//             console.log(`Your current balance is: $${this.balance}`)
//         }
//     }
//     checkBalance(): void {
//         console.log(`Your current balance is $${this.balance}`)
//     }
// }

// class Customer {
//     firstName: string;
//     lastName: string;
//     gender: string;
//     age: number;
//     mobileNumber: number;
//     account: BankAccountDetail

//     constructor (
//         firstName: string,
//         lastName: string,
//         gender: string,
//         age: number,
//         mobileNumber: number,
//         account: BankAccountDetail
//     )
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//         this.mobileNumber = mobileNumber;
//         this.account = account
//     }
// }


// async function bankService() {
//     let customersadd: Customer[] = [];
//     console.log(`Welcome to our banking service!`)
//     console.log(`Please enter account hoder details: `)
//     let condition = true
//     while (condition) {

//     let customerName = await inquirer.prompt ([{
//         name: "firstname",
//         type: "string",
//         message: "Please enter your first name: "
//     },
//     {
//         name: "lastname",
//         type: "string",
//         message: "Please enter your last name: "
//     },{
//         name: "gender",
//         type: "string",
//         message: "Please enter your gender: "
//     },{
//         name: "mobilenumber",
//         type: "number",
//         message: "Please enter your mobile mumber: "
//     },{
//         name: "accountnumber1",
//         type: "number",
//         message: "Please enter your account number: "
//     },{
//         name: "initialdeposit",
//         type: "number",
//         message: "Please enter your initial deposit: "
//     },
// ]);


// let accountdetail: BankAccountDetail = new BankAccountDetail(customerName.accountnumber1, customerName.initialdeposit)

//     let newcustomers: Customer =  new Customer(customerName.firstname, customerName.lastname, customerName.gender, customerName.age, customerName.mobileNumber, accountdetail);
   
//     customersadd.push(newcustomers);
//     let furtheraddition = await inquirer.prompt (
//         {
//             name: "accountholder",
//             type: "confirm",
//             message: "Do you wnat to add more bank account holder: "
//     })
//     condition = furtheraddition.accountholder
//  };

//       do {
//         console.log(`For accessing banking services, Please enter your account number: `)
//     const accountNumberInput = await inquirer.prompt ({
//         name: "accountNumber",
//         type: "number",
//         message: "Bank account number: "
//     })

//     let accountNumberMatch: any = customersadd.find(customersadd => customersadd.account.accountNumber === accountNumberInput.accountNumber);
      
//     if(accountNumberMatch){
//         console.log(`Welcome ${accountNumberMatch.firstName} ${accountNumberMatch.lastName}`)

//         do {
//         const ans = await inquirer.prompt ({
//             name: "selectOperation",
//             type: "list",
//             message: "Please select your desired option? ",
//             choices: ["Deposit", "Withdrawal", "Check Balance", "Exit"]
//         })
//         switch (ans.selectOperation) {
//             case "Deposit" :
//                 const depositAmount = await inquirer.prompt ({
//                     name: "amount",
//                     type: "number",
//                     message: "Please enter the amount you wish to deposit: "
//                 });
//                 accountNumberMatch.account.deposit(depositAmount.amount)
//                 break;
//         case "Withdrawal" :
//             const withdrawAmount = await inquirer.prompt ({
//                 name: "amount",
//                 type: "number",
//                 message: "Please enter the amount you wish to withdraw: "
//             });
//             accountNumberMatch.account.withdraw(withdrawAmount.amount)
//             break;
//         case "Check Balance" :
//             accountNumberMatch.account.checkBalance();
//             break;
//             case "Exit" :
//                 console.log(`Thank you for using our bank services. Have a nice day! `)
 
//         }
//     } while (true)

//     } else {
//         console.log(`Invalid account number. Please try again...`)
//     }
// } while (true)

//     }

//     bankService()