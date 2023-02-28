// function to generate markdown for README
function generateMarkdown(data, badge, licence) {  
  return `
# ${data.projectTitle} 

#### Badges
  ${badge}

## Description
<hr>
    ${data.projectDescription}  

    When creating an open source project on GitHub, it's important to have a high-quality README for the app. 
    This application assists an individual in achieving such a goal, by providing command-line driven instructions 
    to guide him / her though the rudimentary elements, populating pre-defined headings with their own content, 
    whilst being prompted along the way with appropriate responses. 
    
    This thus, frees the developer to focus on their task at hand hence, aids to the success of their project. 


## Table of Contents
** **
- [Installation](#installation)
- [Usage](#usage)
- [License](#license-\u{1f4cc})
- [How to Contribute](#how-to-contribute-\u{1f4cc})
- [Tests](#tests-\u{1f4cc})
- [Questions](#questions-\u{1f4cc})


## Installation
<hr>

    ${data.projectInstall}
  
    To run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. 
    From your command line:

    \u{1f538} Go into local repository
    $ cd /Users/home/win/project-1/ 
    
    \u{1f538} Install dependencies
    $ npm install -y

    \u{1f538} Install inquirer 
    $ npm install inquirer

    \u{1f538} Create a .gitignore file 
    $ touch .gitignore 


## Usage
<hr>
    ${data.projectUsage}

### Commands: 

    node index.js   |  Run at command prompt to START appilcation 

### User prompts:

    Please enter the title of your project?
    Please enter a description of your project?
    Please enter Installation Instructions for your project?
    Please enter Usage information for your project?
    Please enter choose a license for your project from options given?
        | (list of options given to choose)
    What is your GitHub Username?
    What is your email address?

### File output generated: 

    README.md



## License \u{1f4cc}
    ${licence}

## How to Contribute \u{1f4cc}
<hr>

Join our project and provide assistance by:

\u{1f53a} Checking out the list of [open issues](${data.emailAddress}) where we need help.

\u{1f53a} If you need new features, please open a [new issue](${data.emailAddress}) or start a [discussion](${data.emailAddress}).

If this app has helped your project or inspired you with new ideas, please don't forget to this repository. 
This gesture of appreciation encourages contributors and helps us grow our community.



## Tests \u{1f4cc}
<hr>

### User input valided for empty invalid responses to questions. 

## Questions \u{1f4cc}
** **


  * My GitHub Link: ${data.gitHub}

  * Email contact: ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
