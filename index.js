const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")

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
      message: "What is URL of your project in GitHub?",
      name: "url"
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
      message: "What packages need to be installed to run your project.",
      name: "installation"
    },
    {
      type: "input",
      message: "What technologies were used to create your project.",
      name: "technology"
    },
    {
      type: "input",
      message: "Please provide an example of how your project can be used.",
      name: "usage"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license would you like to have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
    },
    {
      type: "input",
      message: "Including yourself, please list out all contributors",
      name: "contributer"
    },
    {
      type: "input",
      message: "What command is used to run a test",
      name: "tests",
    }
  ]); // end of return 
}; // end of function 

// write the answers to a new README file
function writetoFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfully written your README file");
  });
};

// write the answers to a new README file
async function init() {
  try {
    const answers = await askQuestions();
    generateMarkdown(answers);
    writetoFile("README.md", generateMarkdown(answers));

    } catch (err) {
      console.log(err);
    }
};

init();


    

