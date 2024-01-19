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
            choices: ['View Departments', 'Add Department', 'View Jobs', 'Add Job', 'View Managers', 'Add Manager', 'View Employees', 'Add Employee', 'Exit']
        }
    ]).then((answers) => {
        switch (answers.table) {
            case 'View Departments':
                viewDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'View Jobs':
                viewJobs();
                break;
            case 'Add Job':
                addJob();
                break;
            case 'View Managers':
                viewManagers();
                break;
            case 'Add Manager':
                addManager();
                break;
            case 'View Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Exit':
                break;
            default:
                console.log('Invalid choice. Please choose a valid option.');
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

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:',
        }
    ]).then((answers) => {
        const query = 'INSERT INTO departments (department_name) VALUES (?)';
        db.query(query, [answers.departmentName], (err, results) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Department added successfully!');
            }
            viewTable();
        });
    });
};
const addJob = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Enter the title of the job:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the job:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the job:'
        }
    ]).then((answers) => {
        const { roleTitle, salary, departmentId } = answers;

        db.query('INSERT INTO roles (role_title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, salary, departmentId], (err, results) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Job '${roleTitle}' added successfully.`);
            }

            viewTable();
        });
    });
};


viewTable();