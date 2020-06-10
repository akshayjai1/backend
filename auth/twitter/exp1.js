var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api1", function (req, res) {
  res.send({ status: "from exp1" });
});

const port = 3008;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});

module.exports = app;

// var cookieParser = require("cookie-parser");
// app.use(cookieParser());
