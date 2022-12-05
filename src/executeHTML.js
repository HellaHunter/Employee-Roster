const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

const executeHTML = (response) => {
    const intern = new Intern(
        response.intern[0].internName,
        response.intern[0].internID,
        response.intern[0].internEmail,
        response.intern[0].internSchool
    );

    const manager = new Manager(
        response.manager[0].managerName,
        response.manager[0].managerID,
        response.manager[0].managerEmail,
        response.manager[0].managerOfficeNumber
    );

    const engineer = new Engineer(
        response.engineer[0].engineerName,
        response.engineer[0].engineerID,
        response.engineer[0].engineerEmail,
        response.engineer[0].engineerGithub
    )

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Roster!</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    
    <body style="background-color: #BFCBC2;">
        <div style="background-color: #E2E2E2">
            <br />
            <h1 class="display-3 text-center">Employee Roster</h1>
            <br />
        </div>

        <br />
        <br />

        <div class="card-deck">
            <div class="card text-white bg-dark" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title text-center">Manager: ${manager.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-dark">ID: ${manager.id}</li>
                        <li class="list-group-item bg-dark">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item bg-dark">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-dark" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title text-center">Engineer: ${engineer.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-dark">ID: ${engineer.id}</li>
                        <li class="list-group-item bg-dark">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item bg-dark">Github: <a href="${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-dark" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title text-center">Intern: ${intern.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-dark">ID: ${intern.id}</li>
                        <li class="list-group-item bg-dark">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item bg-dark">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
}

module.exports = executeHTML;