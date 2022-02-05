
// function - generate markdown for README

const generateMarkdown = (data) => {
  return `# ${data.title}
  ![Github License](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
 
  ${data.install}
  
  ${data.usage}
  This project is licensed under ${data.license}
  
  ${data.contributors}
  
  ${data.test}
  
  If you have any questions, please contact me at ${data.email}. You can view a list of my projects at https://github.com/${data.github}.
  `;
};

module.exports = generateMarkdown;
