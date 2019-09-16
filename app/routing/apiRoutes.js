var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userStats = req.body;
    var worstDiff = 40;
    var closestMatch = [];
    for (i = 0; i < friends.length; i++) {
      var scoreDiff = 0;
      for (j = 0; j < friends[i].scores.length; j++) {
        scoreDiff =
          scoreDiff +
          Math.abs(
            parseInt(userStats.scores[j]) - parseInt(friends[i].scores[j])
          );
      }
      console.log("Score Diff " + i + ": " + scoreDiff);
      if (scoreDiff < worstDiff) {
        closestMatch.push(friends[i]);
        if (closestMatch.length > 1) {
          closestMatch.shift();
        }
        worstDiff = scoreDiff;
      }
      console.log("Worst Diff :" + worstDiff);
    }
    friends.push(req.body);
    console.log(closestMatch);
    res.json(closestMatch);
  });
};
