const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")

const writeFileAsync = util.promisify(fs.writeFile)


// Questions User Answers
function askQuestions() {
  return inquirer.prompt([
    {
        type: "input",
        message: "What is your user GitHub username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
      },
      {
        type: "input",
        message: "Please a table of contents for your project.",
        name: "tableofcontents"
      },
      {
        type: "input",
        message: "Please provide the steps required to install your project.",
        name: "installation"
      },
      {
        type: "input",
        message: "Please provide an example of how your project can be used.",
        name: "usage"
      },
      {
        type: "list",
        name: "license",
        message: "What king of license would you like to have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        message: "Including yourself, please list out all contributors",
        name: "contributing"
      },
      {
        type: "list",
        message: "Have you tested your project",
        name: "tests",
        choices: ["Yes", "No"]

      }
    ]); // end of return 
  }; // end of function 

// write the answers to a new README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
    return console.log(err);
    }
    console.log("successfully wrote README file");
  });
}
   

    

