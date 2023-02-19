const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "appname",
        message: "please enter the name of this application"
      },{
          type: "input",
          name: "description",
          message: "please describe what this project does"
        },{
          type: "input",
          name: "installation",
          message: "how can one install this app?"
        },{
          type: "input",
          name: "usage",
          message: "once installed, how can one use this app?"
        },{
          type: "input",
          name: "contributors",
          message: "please enter the name(s) of the contributing creator(s)"
        },{
          type: "list",
          name: "license",
          message: "Select the License",
          choices: [
              "MIT",
              "APACHE 2.0",
              "ISC",
              "None"
          ]
        },{
          type: "input",
          name: "username",
          message: "please enter your github username"
        },{
          type: "input",
          name: "email",
          message: "please enter your github affiliated email"
        },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// function call to initialize program
init();
