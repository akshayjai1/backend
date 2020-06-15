var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var Strategy = require("passport-twitter").Strategy;
var session = require("express-session");

passport.use(
  new Strategy(
    {
      consumerKey: "KKBIawUSE_OWNPJwM",
      consumerSecret: "BJCahJjoUSE_OWNTStPFAj",
      callbackURL: "http://localhost:3000/twitter/return",
    },
    function (token, tokenSecret, profile, callback) {
      return callback(null, profile);
    }
  )
);

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (obj, callback) {
  callback(null, obj);
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "whatever", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

//

app.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

app.get("/twitter/login", passport.authenticate("twitter"));

app.get(
  "/twitter/return",
  passport.authenticate("twitter", {
    failureRedirect: "/",
  }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = app;
