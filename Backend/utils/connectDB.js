const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_Project',
    password: 'Ataurrab@9495'
});

module.exports = pool.promise();