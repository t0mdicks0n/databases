// var db = require('../db');
var db = require('../db/index.js');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {

			var dbConnection = mysql.createConnection({
				host: 'localhost',
			  user: 'root',
			  password: '',
			  database: 'chat'
			});

    	dbConnection.query('SELECT * FROM messages;', function (error, results, fields) {
    		if (error) {
    			throw error;
    		} else if (JSON.stringify(results).length > 0) {
    			console.log('Returning ' + JSON.stringify(results));
    			return JSON.stringify(results);
    		}
    	});
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
			var dbConnection = mysql.createConnection({
				host: 'localhost',
			  user: 'root',
			  password: '',
			  database: 'chat'
			});

    	dbConnection.query('INSERT INTO messages ', messageObj, function (error, results, fields) {
    		if (error) {
    			throw error;
    		}
    		callback(results.insertId);
    	});
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};