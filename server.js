const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: "employees_db"
}, console.log('Connected to the employees database'));

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/departments', (req, res) => {
    db.query("SELECT * FROM departments", (err, result) => {
        if (err) {
            res.json('{"message": "an error occurred"}').status(500);
        } else {
            res.json(result);
        }
    });
});

app.post('/api/departments', (req, res) => {
    const { id, department_name } = req.body;

    db.query("INSERT INTO departments (id, department_name) VALUES (?, ?)", [id, department_name], (err, result) => {
        if (err) {
            res.json('{"message": "an error occurred"}').status(500);
        } else {
            res.json(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})