const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');
const path = require('path');
let employeeList = [];

//create an array of questions for new team member
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fullname',
            message: "What is the manager's name?",
            validate: fnameInput => {
                if (fnameInput) {
                    return true;
                } else {
                    console.log("Please enter team member's first name.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number of the manager?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's id number.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please give the office number of the new manager.',
            validate: officeNumber => {
             if (officeNumber) {
                return true;
            } else {
                console.log("Please enter Manager's office number.")
                return false;
            } 
        }  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the Manager.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's e-mail address.")
                    return false;
                } 
            }
        }])
    }
        const teamQuestions = () => {
             inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a new team member to add',            
            choices: ['Engineer', 'Intern', 'I do not need to add any more members']
        },
        {
            type: 'input',
            name: 'fullname',
            message: "What is the team member's name?",
            validate: fnameInput => {
                if (fnameInput) {
                    return true;
                } else {
                    console.log("Please enter team member's first name.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number of the new team member?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter team member's id number.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the new team member',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter team member's e-mail address.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please give the GitHub username of the new engineer.',
            when: (answers) => answers.role === 'Engineer'
        },
        {
        type: 'input',
            name: 'school',
            message: 'Please give the school where the new intern is enrolled.',
            when: (answers) => answers.role === 'Intern'
        }
    ]).then (response => {

        switch(response.role){
            case "Engineer":
                addEngineer(response);
            case "Intern":
                addIntern(response);
                default:
                    generateTeam();

        }
    });
};

function addIntern(){
    teamQuestions()
}
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, (err) => {
        if(err) throw err;
    });
}

function init() {
    managerQuestions().then(inquirerResponses => {
        const newmanager = new Manager (inquirerResponses.fullname, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber)
        employeeList.push(newmanager);
        writeToFile('index.html', generateTeam({ ...inquirerResponses}));
    })
}

init();