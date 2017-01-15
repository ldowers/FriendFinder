"use strict";

// =============================================================
// Load Data
// =============================================================
var friendData = require("../data/friends.js");

// =============================================================
// Routing
// =============================================================
module.exports = function(app) {

    // =============================================================
    // API GET Requests
    // =============================================================
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // =============================================================
    // API Functions
    // =============================================================
    function findDifference(userScores, friendScores) {

        // Find difference between current user's scores and friend's scores
        var difference = 0;

        for (var j = 0; j < 10; j++) {
            difference += Math.abs(userScores[j] - friendScores[j]);
        };

        // console.log("Difference: " + difference);
        return difference;
    };

    function findBestMatch(newFriend) {

        // console.log("User Scores: " + newFriend.scores);
        // console.log("Friend Scores: " + friendData[0].scores);

        // Find best friendData match for user
        var bestMatch = friendData[0];
        var bestMatchDifference = findDifference(newFriend.scores, friendData[0].scores);

        for (var i = 1; i < friendData.length; i++) {
            // console.log("Friend Scores: " + friendData[i].scores);

            var difference = findDifference(newFriend.scores, friendData[i].scores);

            if (difference < bestMatchDifference) {
                bestMatch = friendData[i];
                bestMatchDifference = difference;
            }
        };

        return bestMatch;
    };

    // =============================================================
    // API POST Requests
    // =============================================================
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var bestMatch = findBestMatch(newFriend);

        // Save survey results in friendData array
        friendData.push(newFriend);

        // Return best match for current user
        res.json(bestMatch);
    });
};