var models = require('../models/index.js');

var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
    	res.send(models.messages.get());
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	console.log(req);
    	models.messages.post(messageObj, function(result) {
    		res.send();
    	});
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};