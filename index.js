
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const getActualLicense = require("./utils/licenses");
// import { getActualLicense } from "./utils/licenses.js";

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

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('success')
    );
}

// Function to assign Badges to user choice in projectLicense
function getlicenceBadge(license) {
    switch(license) {
        case 'Morzilla Public License':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

        case 'MIT Licence':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

        case 'None':
            return 'Awaiting Application';
        default:
            'Please select a licence option'
        }
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
            choices: ['MIT Licence', 'GNU General Public License v3.0', 'Apache License 2.0', 'Morzilla Public License', 'None'],
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
        //console.log(answers.projectLicense);

        // Obtain a badge for the chosen license
        const projectBadge = getlicenceBadge(answers.projectLicense);
        console.log('switch return: ', projectBadge);

        const chosenLicense = getActualLicense(answers.projectLicense);

        // Populate template with user responses 
        const template = generateMarkdown(answers, projectBadge, chosenLicense);
        //console.log('sample template: ', template);

        // Save populated template to ReadMe.md file 
        writeToFile('./templates/k-sampleReadme9.md', template);
    }
    catch(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Overall success')
        }
    }
};

// function call to initialize program
init();






