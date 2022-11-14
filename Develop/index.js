// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const createREADME = (
  title,
  description,
  contents,
  installation,
  usage,
  license,
  contributions,
  tests,
  questions,
  username,
  email
) => {
  // README file that contains the specific contents answered in the questions
  const README = `
  # ${title}
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />

  ## Description
  ${description}
  
  ## Contents
  ${contents}
   
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  <br/>
  This application is covered by the ${license} license. 
  
  ## Contributions
  ${contributions}
  
  ## Tests
  ${tests}

  ## Questions
  ${questions}<br/>
  Find me on GitHub: [${username}](https://github.com/${username})<br/>
  Email me with any questions: ${email}<br /><br />
  `;

  return README;
};

//Array of questions for user input
inquirer.prompt([
  {
    name: "title",
    type: "input",
    message: "what is the title of your README file",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your README file");
        return false;
      }
    },
  },
  {
    name: "description",
    type: "input",
    message: "describe what your application is doing",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please describe what your application is doing");
        return false;
      }
    },
  },
  {
    name: "contents",
    type: "input",
    message: "please add table of contents if your README file is long",
    validate: (contentsInput) => {
      if (contentsInput) {
        return true;
      } else {
        console.log("Please add table of contents if your README file is long");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "describe how to install your application",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please describe how to install your application");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "describe how to use your application",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please describe how to use your application");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "describe what license your application uses",
    choices: [
      "None",
      "Apache_2.0",
      "GPLv3",
      "MIT",
      'BSD_2--Clause',
      'BSD_3--Clause',
      "Boost_1.0",
      "CC0_1.0",
      "EPL_2.0",
      "AGPL_v3",
      "GPL_v2",
      "MPL_2.0",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "state any contributions made",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please state any contributions made");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "are there any tests for the application",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please write tests if applicable");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "questions",
    message: "common questions about the application",
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log(
          "Please provide common questions that a user may have for your application"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address",
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log(
          "Please provide your email address"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "what is your GitHub username",
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log(
          "Please enter your GitHub username"
        );
        return false;
      }
    },
  },
])
.then ((answers) => {
  const { title,
    description,
    contents,
    installation,
    usage,
    license,
    contributions,
    tests,
    questions,
    username,
    email} = answers;

    console.log(answers);
    // A function to write README file
    fs.writeFile(
      "README.md",
      createREADME(title,
        description,
        contents,
        installation,
        usage,
        license,
        contributions,
        tests,
        questions, 
        username,
        email),
        (error) => {
          if (error) throw error;
        }
    );
})
.catch ((error) => {
  if (error.isTtyError) {
    `Prompt could not be rendered in the current environment`
  } else {
    `Something else went wrong`
  }
});