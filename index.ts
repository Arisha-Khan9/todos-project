#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;

console.log("Welcome to your to-do list");

let main = async () => {
  while (condition) {
    let taskOptions = await inquirer.prompt([
      {
        name: "choices",
        type: "list",
        message: "kindly select an option",
        choices: [
          "addTask",
          "deleteTask",
          "updateTask",
          "view to-do list",
          "exit",
        ],
      }
    ])
    if (taskOptions.chioces === "addTask") {
      await addTask();
    } else if (taskOptions.choices === "deleteTask") {
      await deleteTask();
    } else if (taskOptions.choices === "updateTask") {
      await updateTask();
    } else if (taskOptions.choices === "view to-do list ") {
      await viewTask();
    } else if (taskOptions.choices === "exit") {
      condition = false;
      console.log("Thank you for visiting our to-do app!");
    }
  }
};
// add new task!

let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: ["Enter the task you want to add:"],
    }
  ])
  todos.push(newTask.task)
  console.log(newTask.task)
  console.log("Task has been successfully added in your to-do list")
};

//view to-do list

let viewTask = () => {
  console.log("your to-do list:");
  todos.forEach((Task, index) => {
    console.log([index + 1], [Task]);
  })
};

//delete task from a list

let deleteTask = async () => {
  await viewTask();
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "enter a index number of the task you want to delete:",
    },
  ]);
  let deletedTask = todos.splice(taskIndex.index - 1, 1);

  console.log(
    "Task has been deleted from your to-do list.[view to-do list to chek the updated list"
  );
};

//update task from a list

let updateTask = async () => {
  await viewTask();
  let taskUpdate = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter a index number of the task you want to update:",
    },
    {
      name: "newTask",
      type: "input",
      message: "Enter the updated task:",
    },
  ]);
  todos[taskUpdate.index - 1] = taskUpdate.newTask;
  console.log(taskUpdate.index);
  console.log(
    "is successfully updated. [view to-do list to check the updated list]"
  );
};

main();
