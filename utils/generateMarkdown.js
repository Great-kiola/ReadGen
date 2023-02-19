// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ![project image](./imgs/inaction.png)
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage Information
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  ${data.license}
  ## Contributors
  ${data.contributors}
  ## Questions
  Contact me:
  Github: [https://github.com/${data.username}](https://github.com/${data.username})
  Email: [${data.email}](${data.email})

`;
}


module.exports = generateMarkdown;

// Funtion that returns a license badge.
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
