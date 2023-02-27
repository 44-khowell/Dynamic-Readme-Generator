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
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)


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

    
    

## License
    ${licence}

## How to Contribute
<hr>

## Tests
<hr>


## Questions
** **
  * My GitHub Link: <${data.gitHub}>

  * Email contact: ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
