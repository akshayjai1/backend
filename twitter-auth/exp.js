require("dotenv").config();
var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;
