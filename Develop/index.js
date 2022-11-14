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
  questions
) => {
  // README file that contains the specific contents answered in the questions
  const README = 
  `# ${title}

  ## Description
  ${description}
  
  ## Contents
  ${contents}
   
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  
  ## License
  ${license}
  Please refer to the LICENSE in the repo.
  
  ## Contributions
  ${contributions}
  
  ## Tests
  ${tests}

  ## Questions
  ${questions}
  `;

  return README;
};

//Array of questions for user input
// const questions = 
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
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
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
    questions} = answers;

    console.log(answers);
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
        questions),
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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
