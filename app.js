const express = require("express");
const require = require("require");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
