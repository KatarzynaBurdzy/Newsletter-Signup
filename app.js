//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(PORT, function () {
  console.log(`Server up and running on port ${PORT}`);
});

