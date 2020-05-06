function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=300`;
  const technologiesUsed = `https://img.shields.io/badge/Built_With:-${data.technology}-4cbbb9`

  return `
  # ${data.title} 

  ## Technologies Used
  [![Badge] ${technologiesUsed}
  
  ## Description
    ${data.description}

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Tests](#tests)
    - [Contributors](#contributors)
    - [Details](#details)

  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}

  ## License
  ${data.license}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contributors
  ${data.contributors}

  ## Details
  \n This was created by: ![Profile Image]${avatar} 
  \n View the project in GitHub at: ${data.url}
  \n If you have any questions, contact the author directly at ${data.email}.`
   
}

module.exports = generateMarkdown;
