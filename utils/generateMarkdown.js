// function to generate markdown for README
function generateMarkdown(data, badge) {  
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
    ${data.projectLicense}

## How to Contribute


## Tests
<hr>


## Questions
<hr>
  - ${data.gitHub}
  - ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
