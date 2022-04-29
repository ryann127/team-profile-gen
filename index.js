const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const manHtml = require("./src/manager");
const engHtml = require("./src/engineer");
const intHtml = require("./src/intern")

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");


// all employee questions
const questions = [
    {
        type: 'input',
        name: 'empName',
        message: 'Please enter employee name:'
    },
    {
        type: 'input',
        name: 'empId',
        message: 'Please enter employee ID:'
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'Please enter employee email:'
    }
    
]

// manager questions only
const managerQuery = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter manager name:'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter manager ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter manager email:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's office number?",
    },
    
]
// engineer questions only
const engineerQuery = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter engineer name:'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter engineer ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter engineer email:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's GitHub username?",
    },
    
]

// intern questions only
const internQuery = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter intern name:'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter intern ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter intern email:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What school does the intern attend?",
    },
    
]