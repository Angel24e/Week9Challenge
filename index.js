const inquirer = require("inquirer");

const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "Give me a brief description of what your application does.",
        name: "description"
    },
    {
        type: "input",
        message: "Give me a brief explanation on how to install your application.",
        name: "installation"
    },
    {
        type: "list",
        message: "Pick a license for your website",
        choices: ["Big license","little license","right size license"],
        name: "license"
    },
    {
        type: "input",
        message: "Copy your github account link please.",
        name: "github"
    },
    {
        type: "input",
        message: "Give me your email please.",
        name: "email"
    }
];

inquirer
 .prompt(questions)
  .then(answers => {
    console.log(`So it's ${answers.snapchat} and ${answers.email}`);
    createReadMe(answers);
});

const createReadMe = data => {
    console.log(data)
    const template = `# ${data.title}
## Table of Contents
 - [Description](#Description)
 - [License](#License)
 - [Questions](#Questions)
## Description
 ${data.description}
## Installation
 ${data.installation}
## License
 ${data.license}
## Questions
 If you have any questions for me here is my github account link ${data.github} also this is my email ${data.email}. Feel free to reach out.
`
    console.log(template);
    fs.writeFile(`README.md`, template, err => {
        err ? console.log(error) : console.log("Success!")
    });
} 