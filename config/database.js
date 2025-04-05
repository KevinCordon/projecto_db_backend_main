const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin123!',
    database: 'gestion_productos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


const promisePool = pool.promise();

module.exports = promisePool;