const inquirer = require('inquirer');
const fs = require('fs');

let responses = {
    manager: [],
    employee: [],
    intern: [],
    engineer: [],
}

const executeHTML = require('./src/executeHTML');

function addEngineer() {
    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is your new engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your new engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your new engineer's id?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is your new engineer's github?",
                name: "engineerGithub"
            },
        ])
        .then((response) => {
            responses.engineer.push({...response})

            managerOptions()
        })
}

function addIntern() {
    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is your new intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is your new intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your new intern's id?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is your new intern's school?",
                name: "internSchool"
            },
        ])
        .then((response) => {
            responses.intern.push({...response})

            managerOptions()
        })
}

function managerOptions() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please choose what you'd like to do:",
                choices: [
                    "Add an engineer",
                    "Add an intern",
                    "Finish building my team"
                ],
                name: "managerChoices"
            }
        ])
        .then((response) => {
            responses.employee.push({...response})

            if(response.managerChoices === "Add an engineer") {
                addEngineer()
            } else if(response.managerChoices === "Add an intern") {
                addIntern()
            } else {
                runBuild()
            }
        })
}

function runBuild() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Are you ready to view your employee roster?",
                name: "finishedUp"
            }
        ])
        .then((response) => {
            if(response.finishedUp === false) {
                managerOptions();
            } else {
                generateHTML(responses);
                return;
            }
        })
}

function startApp() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Welcome Manager! Please enter your name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Please enter your employee ID:",
            name: "managerID"
        },
        {
            type: "input",
            message: "Please enter your email address:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Please enter your office number:",
            name: "managerOfficeNumber"
        }
    ])
    .then((response) => {
        responses.manager.push({...response})

        managerOptions()
    });
};

const generateHTML = (response) => {
    fs.writeFile("./dist/results.html", executeHTML(response), (err) => {
        err
            ? console.log(err)
            : console.log("results.html created!")
    })
}

startApp();