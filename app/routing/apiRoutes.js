var path = require("path");

var friends = require("app/data/friends.js");

module.exports = function(app) {

  app.get('api/data/friends', function(req, res) {
    res.json(friends.js)
  });

  app.post('/ap/friends', function(req, res) {
    var inputUser = req.body;

    var userResponse = inputUser.score;

    var matchFriend = "";
    var matchImage = "";
    var difference = 10000;

    for (var i = 0; i<friends.length; i++) {
      var diff = 0;
      for (var j = 0; j<userResponse.length; j++) {
        diff += Math.abs(friends[i].score[j] - userResponse [j]);
      }
      if (diff<totalDifference) {
        totalDifference = diff;
        matchFriend = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    friends.push(inputUser);

    res.json({status: 'Ok', matchFriend: matchFriend, matchImage: matchImage});
  });
};