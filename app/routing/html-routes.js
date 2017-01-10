"use strict";

// Dependencies
// =============================================================

var path = require("path");
var root = __dirname;

// Routing
// =============================================================

module.exports = function (app) {

// HTML GET Requests
// =============================================================

	app.get("/survey", function(req, res) {
    res.sendFile(path.join(root, '/../public/survey.html'));
  });

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(root + '/../public/home.html'));
	});
};