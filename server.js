// require express
const express = require("express");

// invoke express
const app = express();

// declare port
const port = 5000;

// require path
const path = require("path");

// invoke routes
const router = express.Router();

// // require middleware
var verify = require("./middleware");

app.get("/error", function (req, res) {
  res.sendFile(path.join(__dirname, "views/Error.html"));
});
//  // invoke method middleware
app.use(verify);

app.use(express.static("views"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server is runnig on port 5000..");
});
