"use strict";

// Load Data
// =============================================================

var friendData = require("../data/friends.js");

// Routing
// =============================================================

module.exports = function(app) {

// API GET Requests
// =============================================================

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// API POST Requests
// =============================================================

  app.post("/api/friends", function(req, res) {
    
      friendData.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    
    console.log(friendData);
  });
};