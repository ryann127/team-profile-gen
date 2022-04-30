const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const { renderManager } = require("./src/manager");
const { renderEngineer } = require("./src/engineer");
const { renderIntern } = require("./src/intern")
const { renderHTML } = require("./src/renderHTML");

const fs = require("fs");
const inquirer = require("inquirer");


const memberArray = [];

// all employee questions
const questions = [
    {
        type: 'list',
        name: 'empStart',
        message: 'Would you like to create a new employee profile?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'empName',
        message: 'Please enter employee name:',
        when: function (placeholder) {
            if (placeholder.empStart === 'No') {
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'empId',
        message: 'Please enter employee ID:',
        when: function (placeholder) {
            if (placeholder.empStart === 'No') {
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'Please enter employee email:',
        when: function (placeholder) {
            if (placeholder.empStart === 'No') {
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'empRole',
        message: "Please select employee position:",
        choices: ['Manager', 'Engineer', 'Intern'],
        when: function (placeholder) {
            if (placeholder.empStart === 'No') {
                return false;
            } else {
                return true;
            }
        }
    },
]

// manager questions only
const managerQuery = [

    {
        type: 'input',
        name: 'managerPhone',
        message: "What is the manager's office number?",
    },

]
// engineer questions only
const engineerQuery = [
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?",
    },

]

// intern questions only
const internQuery = [
    {
        type: 'input',
        name: 'internSchool',
        message: "What school does the intern attend?",
    },

]

const newEmployee = async () => {
    await inquirer.prompt(questions).then((response) => {
        let empName = response.empName;
        let empId = response.empId;
        let empEmail = response.empEmail;
        let empRole = response.empRole;
        let empStart = response.empStart;
        let managerPhone;
        let engineerGithub;
        let internSchool;

        if (empStart === 'No') {
            const teamHtml = () => {
                let teamMembers = ''
                memberArray.forEach(employee => {
                    if (employee.getRole() === "Manager") {
                        teamMembers = teamMembers + renderManager(employee)
                    } else if (employee.getRole() === "Engineer") {
                        teamMembers = teamMembers + renderEngineer(employee)
                    } else if (employee.getRole() === "Intern") {
                        teamMembers = teamMembers + renderIntern(employee);
                    }
                    console.log(memberArray)
                })

                writeToFile("./dist/team.html", renderHTML(teamMembers))
            }
            teamHtml();
        } else {

            if (empRole === 'Engineer') {
                inquirer.prompt(engineerQuery).then((response) => {
                    engineerGithub = response.engineerGithub;
                    let employee = new Engineer(empName, empId, empEmail, engineerGithub);
                    memberArray.push(employee);
                    newEmployee(memberArray);
                });
            } else if (empRole === 'Manager') {
                inquirer.prompt(managerQuery).then((response) => {
                    managerPhone = response.managerPhone;
                    let employee = new Manager(empName, empId, empEmail, managerPhone);
                    memberArray.push(employee);
                    newEmployee(memberArray);
                });
            } else {
                inquirer.prompt(internQuery).then((response) => {
                    internSchool = response.internSchool;
                    let employee = new Intern(empName, empId, empEmail, internSchool);
                    memberArray.push(employee);
                    newEmployee(memberArray);
                });


            }
        }
    })
}





function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Team Profile Created!'));
}


const init = (response) => {
    newEmployee();
}

init();



