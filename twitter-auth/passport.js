var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var session = require("express-session");

var { sessionConfig, twitterConfig } = require("./config");
const app = require("./exp");
const { putUser } = require("./data");

function setTwitterData(token, tokenSecret, profile, callback) {
  console.log("token", token, tokenSecret);
  putUser({
    access_token: token,
    access_token_secret: tokenSecret,
    username: profile.username,
  });
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

passport.use(new TwitterStrategy(twitterConfig, setTwitterData));

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

module.exports = passport;
