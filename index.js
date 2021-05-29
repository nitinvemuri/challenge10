const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');
const {  } = require('./gensite');
const { prompt } = require('inquirer');
const generateHTML = ('./dist/index.html')
const pagetemplae = require('./src/pagetemplae');
const { validate } = require('@babel/types');






const teamMembers = [];


function addTeamMembers() {
    inquirer.prompt([
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
        name: 'officeNumbers',
        message: 'What is managers office numbers?',
    },


    
]).then(theManager => {
    const manager = new Manager(theManager.managerName, theManager.managerId, theManager.managerEmail, theManager.officeNumbers)
    teamMembers.push(manager)
    console.log('workignigign')
    otherTeam();
})

function otherTeam() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employee',
            message: 'what other employee do you have?',
            choices: [
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
        }
    ]).then(teamMember => {
        const intern = new Intern(teamMember.name)
        teamMembers.push(intern)
        confirmOtherTeam();
    })
}
function engineerPrompt () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'engineerName',
        }
    ]).then(teamMember => {
        const engineer = new Engineer (teamMember.name)
        teamMembers.push(engineer);
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
}







function callBack(err) {
    if (err) throw err;
    console.log('ggg')
}

function createTeam() {
    const context = pagetemplae(teamMembers);
    fs.writeFileSync(generateHTML, context);
    fs.copyfile('./dist/style.css', callBack)
};

}


addTeamMembers();

module.exports = teamMembers;
  