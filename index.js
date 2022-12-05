const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');






// mainMenu() {
//     inquirer
//       .prompt([
//         {
//             type: "input",
//             message: "Welcome Manager! Please enter your name:",
//             name: "managerName"
//         },
//         {
//             type: "input",
//             message: "Please enter your employee ID:",
//             name: "managerID"
//         },
//         {
//             type: "input",
//             message: "Please enter your email address:",
//             name: "managerEmail"
//         },
//         {
//             type: "input",
//             message: "Please enter your office number:",
//             name: "managerOfficeNumber"
//         }
//       ])
//       .then((answers) => {
//         inquirer
//             .prompt([
//                 {
//                     type: "list",
//                     message: "Please choose what you'd like to do:",
//                     choices: [
//                         "Add an engineer",
//                         "Add an intern",
//                         "Finish building my team"
//                     ],
//                     name: "managerChoices"
//                 }
//             ])
//             .then((response) => {
//                 if(response.managerChoices === "Add an engineer") {
//                     inquirer
//                         .prompt([
//                             {
//                                 type: "input",
//                                 message: "What is your new engineer's name?",
//                                 name: "engineerName"
//                             },
//                             {
//                                 type: "input",
//                                 message: "What is your new engineer's email?",
//                                 name: "engineerEmail"
//                             },
//                             {
//                                 type: "input",
//                                 message: "What is your new engineer's id?",
//                                 name: "engineerID"
//                             },
//                             {
//                                 type: "input",
//                                 message: "What is your new engineer's github?",
//                                 name: "engineerGithub"
//                             },
//                         ])
//                 }
//             })
//       }
// }