const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        question: 'Please enter the title of your project?'
    },
    {
        question: 'Please enter a description of your project?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

const promptUser = () => {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the title of your project?'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please enter a description of your project?'
        },
        {
            type: 'input',
            name: 'projectInstall',
            message: 'Please enter Installation Instructions for your project?'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Please enter Usage information for your project?'
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'Please enter choose a license for your project from options given?',
            choices: ['MIT Licence', 'GNU General Public License v3.0', 'Apache License 2.0', 'Morzilla Public License'],
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?'
        },

    ]);
    
};

// function to initialize program
async function init() {
    console.log('Now in init function');
    try {
        const answers = await promptUser();

        console.log(answers);
        console.log('executed code successfully');
    }
    catch(err) {
        console.log(err);
    }
};

// function call to initialize program
init();






