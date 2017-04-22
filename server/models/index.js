// var db = require('../db');
var db = require('../db/index.js');
var mysql = require('mysql');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {

			var dbConnection = mysql.createConnection({
			  host: 'localhost',
			  user: 'root',
			  password: 'plantlife',
			  database: 'chat'
			});

    	dbConnection.query('SELECT A.message, A.created_at, A.ID, B.username FROM messages A INNER JOIN users B ON A.user_ID = B.ID;', function (error, results, fields) {
    		if (error) {
    			throw error;
    		} else if (JSON.stringify(results).length > 0) {
    			console.log('Returning ' + JSON.stringify(results));
    			callback(JSON.stringify(results));
    		}
    	});
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
			var dbConnection = mysql.createConnection({
			  host: 'localhost',
			  user: 'root',
			  password: 'plantlife',
			  database: 'chat'
			});

			// console.log((typeof messageObj), messageObj);

			var username = messageObj.username;
			var currentMessage = messageObj.message;

      dbConnection.query('SELECT * FROM users WHERE username = "' + username + '";', function(error, results, fields) {
        // console.log('JALALAA', JSON.parse(JSON.stringify(results)));
        if (JSON.parse(JSON.stringify(results)).length === 0) {
          dbConnection.query('INSERT INTO users(username) VALUES ("' + username + '");', function (error, results, fields) {
            dbConnection.query('SELECT ID FROM users WHERE username =' + username + ';', function(error, res, fields) {

              // console.log('!!!!!!!!!!!!!!', res);
              // var userID = JSON.parse(JSON.stringify(res));
              dbConnection.query('INSERT INTO messages(message, user_ID) VALUES("' + currentMessage + '", 2)', function (error, results, fields) {
                if (error) {
                  throw error;
                }
                callback(results.insertId);
              });
            });
          });
        } else {
          dbConnection.query('INSERT INTO messages(message, user_ID) VALUES("' + currentMessage + '", 2)', function (error, results, fields) {
            if (error) {
              throw error;
            }
            callback(results.insertId);
          });
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'plantlife',
        database: 'chat'
      });

      dbConnection.query('SELECT username, created_at FROM users;', function(error, results, fields) {
        callback(JSON.stringify(results));
      });
    },
    post: function (messageObj, callback) {
      // { username: 'Valjean' }
      var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'plantlife',
        database: 'chat'
      });
      var username = messageObj.username;

      dbConnection.query('INSERT INTO users(username) VALUES("' + username + '")', function(error, results, fields) {
        if (error) {
          throw error;
        }
        callback(results);
      });
    }
  }
}