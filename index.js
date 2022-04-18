const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employeeList = [];

// Manager Questions prompted
//User enters manager details
//Prompt to add engineer or intern
//prompt engineer questions or intern questions based on selection

//create an array of questions for new team member
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fullname',
            message: "What is the manager's name?",
            validate: fullnameInput => {
                if (fullnameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's name.")
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
                    console.log("Please enter manager's id number.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please give the office number of the manager.',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number.")
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
                    console.log("Please enter manager's e-mail address.")
                    return false;
                }
            }
        }])
}
const teamQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a new team member to add',
            choices: ['Engineer', 'Intern', 'I do not need to add any more members']
        },

    ]).then(response => {
        if (response.role === "Engineer") {
                addEngineer(response);
        } else if (response.role === "Intern") {
                addIntern(response);
        } else {
            writeToFile("./dist/index.html", generateTeam(employeeList));
            copyFile();
        }

    })
};

function addIntern() {
    inquirer.prompt([
        {
                type: 'input',
                name: 'fullname',
                message: "What is the intern's name?",
                validate: fullnameInput => {
                    if (fullnameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id number of the new intern?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter new intern's id number.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the e-mail address of the new intern',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter new intern's e-mail address.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please give the school where the new intern is enrolled.',
            }

    ]).then(inquirerResponses => {
        console.log('inquirerResponses: ', inquirerResponses);
        const newintern = new Intern(inquirerResponses.fullname, inquirerResponses.id, inquirerResponses.email, inquirerResponses.school);
        employeeList.push(newintern);
        console.log('employeeList: ', employeeList);
        teamQuestions();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
                type: 'input',
                name: 'fullname',
                message: "What is the engineer's name?",
                validate: fullnameInput => {
                    if (fullnameInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id number of the new engineer?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter new engineer's id number.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the e-mail address of the new engineer',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter new engineer's e-mail address.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please give the new engineer's github username.",
            }

    ]).then(inquirerResponses => {
        console.log('inquirerResponses: ', inquirerResponses);
        const newengineer = new Engineer(inquirerResponses.fullname, inquirerResponses.id, inquirerResponses.email, inquirerResponses.github);
        employeeList.push(newengineer);
        console.log('employeeList: ', employeeList);
        teamQuestions();
    });
}

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
    });
}
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File copied!"
            });
        });
    });
};

function addManager() {
    managerQuestions().then(inquirerResponses => {
        console.log('inquirerResponses: ', inquirerResponses);
        const newmanager = new Manager(inquirerResponses.fullname, inquirerResponses.id, inquirerResponses.email, inquirerResponses.officeNumber)
        employeeList.push(newmanager);
        console.log('employeeList: ', employeeList);
        teamQuestions();
    })
}

addManager();
