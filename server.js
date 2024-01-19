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
    inquirer.prompt([
        {
            type: 'list',
            name: 'table',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Jobs', 'View Managers', 'View Employees', 'Exit']
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
            case 'Exit':
                break;
            default:
                console.log('Invalid choice. Please choose a valid option.');
                viewTable();
        }
    });
}

const viewDepartments = () => {
    db.query('SELECT * FROM departments', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        else console.table(results);
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Return to Main Menu', 'Exit']
            }
        ]).then((answers) => {
            if (answers.action === 'Return to Main Menu') {
                viewTable();
            } else {
                process.exit();
            }
        });
    });
}

const viewJobs = () => {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        else console.table(results);
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Return to Main Menu', 'Exit']
            }
        ]).then((answers) => {
            if (answers.action === 'Return to Main Menu') {
                viewTable();
            } else {
                process.exit();
            }
        });
    });
}

const viewManagers = () => {
    db.query('SELECT * FROM managers', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        else console.table(results);
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Return to Main Menu', 'Exit']
            }
        ]).then((answers) => {
            if (answers.action === 'Return to Main Menu') {
                viewTable();
            } else {
                process.exit();
            }
        });
    });
}

const viewEmployees = () => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        else console.table(results);
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Return to Main Menu', 'Exit']
            }
        ]).then((answers) => {
            if (answers.action === 'Return to Main Menu') {
                viewTable();
            } else {
                process.exit();
            }
        });
    });
}

viewTable();