
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
    {
        "name": "Little Timmy",
        "photo": "https://tinyurl.com/y9xpumwt",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];



app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriend);
    res.json(newFriend);
});

require("./app/routing/htmlRoutes")(app, path)