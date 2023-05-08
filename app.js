const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
