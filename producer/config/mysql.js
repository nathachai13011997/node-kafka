const mysql = require('mysql2');
const config = require( "./app");

const pool = mysql.createPool({
    host: config.hostDB,
    database: config.database,
    port: config.portDB,
    user: config.userDB,
    password: config.passwordDB
  }).promise();
 

module.exports = pool