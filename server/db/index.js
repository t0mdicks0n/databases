var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

module.exports = dbConnection;

// // Test of connection
// dbConnection.query('SELECT * FROM messages;', function (error, results, fields) {
// 	if (error) {throw error;}
// 	console.log('results is ',results);
// 	return results;
// });