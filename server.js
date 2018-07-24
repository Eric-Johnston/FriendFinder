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

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/characters", function (req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriend);
    res.json(newFriend);
});
