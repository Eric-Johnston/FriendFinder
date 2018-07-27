var friendsData = require("../data/friends");

module.exports = function(app, path, friends) {
    
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });
    
    
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        friendsData.friends.push(newFriend);
        res.json(newFriend);
    });
}