const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use. Include screenshots as needed:'
        },
        {
            type:'input',
            name:'credits',
            message:'List your collaborators, if any. If none, skip or type "N/A":'
        },
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:'
        },
        {
            type:'input',
            name:'contributing',
            message:'If you would like others to contribute to your app/package, add guidelines for how to do so. If not, skip or type "N/A":'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  // TODO: Create a function to initialize app
  function init() {
    try {
      promptUser().then((responses) => {
        writeToFile("ReadMe.md", generateMarkdown(responses));
        console.log("Successfully created README.md");
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  init();
