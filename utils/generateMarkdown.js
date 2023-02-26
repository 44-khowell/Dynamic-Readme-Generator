// function to generate markdown for README
function generateMarkdown(data) {  
  return `
# **${data.projectTitle}** 

## Badges

## Description
    ${data.projectDescription}  


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation
    ${data.projectInstall}


## Usage
    ${data.projectUsage}


## License
    ${data.projectLicense}

## How to Contribute


## Tests


## Questions
  - ${data.gitHub}
  - ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
