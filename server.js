const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: employees_db
}, console.log('Connecte to the employees database'));

const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})