var mysql = require('mysql');

/*
 * Setup connection to database
 */

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
  	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    database: 'kanban' //DATABASE NAME HERE
});

