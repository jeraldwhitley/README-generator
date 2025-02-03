// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
{ type: 'input', name: 'username' , message: "What is your GitHub username?"},
{ type: 'input', name: 'email' , message: "What is your email so people can contact you for questions about your project?"},
{ type: 'input', name: 'link' , message: "Insert a link to your Github homepage."},
{ type: 'input', name: 'title' , message: "What is the name of your project?"},
{ type: 'input', name: 'description' , message: "Provide a brief description of your project (motivation, what problem did you solve, etc."},
{ type: 'input', name: 'installation' , message: "How does someone install your project. Provide specific details."},
{ type: 'input', name: 'usage' , message: "Provide instructions and examples for use."},
{ type: 'list', name: 'license' , message: "What license are you using for this project?",
    choices: ['Apache License 2.0', 'Boose Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'MIT License', 'Mozilla Public License 2.0']
}, 
{ type: 'input', name: 'contributing' , message: "Who has contributed to this project?"},
{ type: 'input', name: 'tests' , message: "List any tests for your project and provide examples on how to run them."},
];

//function to lay out structure of README file
const readmeContent = function generateREADME (data){
    return ` 
    # Project Name
    ${data.title}
    
    ## License
    ${data.license}

    ## Table of Contents
    - [Description] (#description)
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Contributing] (#contributing)
    - [Credits] (#credits)
    - [Questions] (#questions)

    ## Description 
    ${data.description}

    ## Installation
    ${data.install}

    ## Usage
    ${data.use}

    ##Contributing
    ${data.contributing}

    ##Tests
    ${data.tests}

    ## Credits 
    ${data.credit}

    ## Questions
    If you have any questions, please feel free to contact me!
    Github Username: ${data.username}
    Github Homepage: ${data.link}
    Email: ${data.email}
`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log("New README created! Happy coding!") 
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('newREADME.md', readmeContent(response));
    });
}

// Function call to initialize app
init();
