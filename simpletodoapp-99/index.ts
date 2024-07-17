#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk"

let todoList: any[] = [];
console.log(chalk.cyan(`Your current task list is : ${todoList}`))

let condition = true
while(condition) {
let addTodo = await inquirer.prompt (
    {
        name: "addTask",
        message: "What do you want to add task in your todo list? ",
        type: "input"
    })
    todoList.push(addTodo.addTask)
    console.log(chalk.cyan(`Your updated task list is: ${todoList}`))
let moreTodo = await inquirer.prompt(
    {
        name: "moreAddition",
        message: "Do you want to add another task in your todo list? ",
        type: "confirm",
        default: true
    });
   
condition = moreTodo.moreAddition
}

console.log(chalk.cyan(`Your final list of todo tasks are: ${todoList}`)) 

let condition2 = true
while(condition2) {
    let otherTask = await inquirer.prompt (
        {
            name: "otherTaskOptions",
            message: "Do you want to delete a task from todo list? ",
            type: "confirm",
            default: true
        }
    )

    if (!otherTask.otherTaskOptions) {
        break;
    }

    if (todoList.length > 0) {
    
let deleteTodo : any = await inquirer.prompt (
    {
        name: "deleteTask",
        message: "Which task do you want to delete from your todo list? ",
        type: "list",
        choices: todoList
      })
let indexofDeleteitem = todoList.indexOf(deleteTodo.deleteTask)

if (indexofDeleteitem >= 0) {
    todoList.splice(indexofDeleteitem, 1)
    console.log(chalk.yellow(`The task "${deleteTodo.deleteTask}" has been deleted from todo list.`))
    console.log(chalk.cyan(`The updated list is: ${todoList}`))



condition2 = deleteTodo.deleteTask
} 


} else if (todoList.length === 0) {
    console.log(chalk.green(`All tasks have been completed/deleted`))
    break;
}
}

console.log(chalk.cyan(`Your final list of todo tasks are: ${todoList}`))

