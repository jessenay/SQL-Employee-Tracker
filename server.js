const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: "employees_db"
}, console.log('Connected to the employees database'));

function viewTable() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'table',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Jobs', 'View Managers', 'View Employees']
        }
    ]).then((answers) => {
        switch (answers.table) {
            case 'View Departments':
                viewDepartments();
                break;
            case 'View Jobs':
                viewJobs();
                break;
            case 'View Managers':
                viewManagers();
                break;
            case 'View Employees':
                viewEmployees();
                break;
        }
    });
}

