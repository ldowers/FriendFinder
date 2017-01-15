"use strict";

// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Express Configuration
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================
// Routes
// =============================================================
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// =============================================================
// Listener
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});