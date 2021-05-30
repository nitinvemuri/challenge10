const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');


const generateHTML = ('./dist/index.html')
const pagetemplae = require('./src/pagetemplae');

const teamMembers = [];


function addTeamMembers() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'choices',
        message: 'What type of Employee',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'None',
        ]
    },

]).then(teamChoice => {
    const pick = teamChoice.choices;
    if (pick === 'Manager') {
        managerPrompt();
    } else if (pick === 'Engineer') {
        engineerPrompt();
    } else if (pick === 'Intern') {
        internPrompt();
    } else if (pick === 'None') {
        nonePrompt();
    }
})

function managerPrompt() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is Managers name',
            validate: inputName => {
                if (inputName) {
                    return true
                } else {
                    console.log("Input a name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is Manager Email?',
            validate: inputEmail => {
                if (inputEmail) {
                    return true 
                } else {
                    console.log('Input an Email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Manager ID?',
            validate: inputID => {
        
                if (inputID) {
                    return true
        
                } else {
                    console.log('input an id')
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'numbers',
            message: 'What is managers office numbers?',
            validate: inputNumbers => {
                if(inputNumbers) {
                    return true;
                } else {
                    console.log('input office Numbers?')
                    return false;
                }
            }
        },
    
    ]).then(theManager => {
        const manager = new Manager(theManager.managerName, theManager.managerId, theManager.managerEmail, theManager.numbers)
        teamMembers.push(manager)
        console.log('Added Manager')
        confirmOtherTeam();
    })
}

function otherTeam() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employee',
            message: 'what other employee do you have?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'None',
            ],
            
        }
    ]).then(teamMember => {
        const pick = teamMember.employee; 
        if(pick === 'Engineer') {
            engineerPrompt();
        } else if (pick ==='Intern') {
            internPrompt();
        } else if (pick === "None") {
            nonePrompt();
        } else if (pick === 'Manager') {
            managerPrompt();

        }

    })
}

function confirmOtherTeam () {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Do you have another Employee to add?',
            choices: ['Yes','No', 'Redo']
        }
    ]).then(teamMember => {
        const pick = teamMember.confirmAdd
        if (pick === 'Yes') {
            otherTeam();
        } else if 
        (pick ==='No') {
            createTeam();
        } else if 
            (pick === 'Redo') {
                addTeamMembers();
            }
        
    })
}
function internPrompt () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is Intern Name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else  {
                    console.log('Input a name')
                    return internPrompt();
                }
            }
        },
        {
            type : 'input',
            name: 'id',
            message: 'What is Intern ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Intern Email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is Intern School/College/University',
            validate: inputSchool => {
                if (inputSchool) {
                    return true
                } else {
                    return false
                }
            }
        }
    ]).then(internMember => {
        const intern = new Intern(internMember.name, internMember.id, internMember.email, internMember.school)
        teamMembers.push(intern)
        console.log('Added Intern')
        confirmOtherTeam();
    })
}
function engineerPrompt () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is Engineer Name',
            validate: inputName => {
                if(inputName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Engineer Id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Engineer Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is Engineer Github',
        },
    ]).then(engineerMember => {
        const engineer = new Engineer (engineerMember.name, engineerMember.id, engineerMember.email, engineerMember.github,)
        teamMembers.push(engineer);
        console.log('Added Engineer')
        confirmOtherTeam();
    })
}

function nonePrompt () {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'confirm',
            message: 'are you sure',
            choices: ['yes', 'no']
        }
    ]).then(teamMember => {
        const pick = teamMember.confirm;
        if (pick === 'yes') {
            createTeam();

        } else if (pick === 'no') {
            return addTeamMembers();
        }


    }) 
};



function createTeam() {
    const generatePage = pagetemplae(teamMembers);
    fs.writeFileSync(generateHTML, generatePage,);
    errorOrSucc();
}

function errorOrSucc() {
    if (err => {
        throw err
    })
    console.log('Successfully Written')
};



}


addTeamMembers();

module.exports = teamMembers;


