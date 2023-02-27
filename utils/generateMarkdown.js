// function to generate markdown for README
function generateMarkdown(data, badge, licence) {  
  return `
# **${data.projectTitle}** 

#### Badges
  ${badge}

## Description
<hr>
    ${data.projectDescription}  


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


## Usage
<hr>
    ${data.projectUsage}


## License
    ${licence}

## How to Contribute


## Tests
<hr>


## Questions
<hr>

  * My GitHub Link: <${data.gitHub}>

  * Email contact: ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
