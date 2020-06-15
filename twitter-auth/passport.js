var passport = require("passport");
var Strategy = require("passport-twitter").Strategy;
var session = require("express-session");

var { sessionConfig, twitterConfig } = require("./config");
const app = require("./exp");

function setTwitterData(token, tokenSecret, profile, callback) {
  console.log("token", token, tokenSecret);
  return callback(null, profile);
}
passport.serializeUser((user, callback) => {
  console.log("in serializeUser", user);
  callback(null, user);
});
passport.deserializeUser((obj, callback) => {
  console.log("in deSerializeUser", obj);
  callback(null, obj);
});

passport.use(new Strategy(twitterConfig, setTwitterData));

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

module.exports = passport;
