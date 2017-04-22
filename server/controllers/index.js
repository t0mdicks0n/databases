var models = require('../models/index.js');

var express = require('express');


var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());



module.exports = {
  messages: {
    get: function (req, res) {
    	// res.send(models.messages.get());
    	models.messages.get(function(result) {
    		res.send(result);
    	})
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	models.messages.post(req.body, function(result) {
    		res.sendStatus(200, 'inputted message');
    	});
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      model.messages.get(function(result) {
        res.send(result);
      })
    },
    post: function (req, res) {
      models.messages.post(req.body, function(result) {
        res.sendStatus(200, 'inputted user');
      })
    }
  }
};