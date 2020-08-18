var TwitterStrategy = require("passport-twitter").Strategy;
const { putUser } = require("./database");
const { twitterConfig } = require("./config");

/** this function that gets called by passport-twitter library,
 * because when twitter successfully authenticates the user, it
 * redirects to /twitter/loginSuccess, and we are listening to route
 * as well with `passport.authenticate('twitter')` in routes.js
 *
 * in this function we are putting the token, secret, profile we get into
 * database,
 *
 * it is important to call the callback we receive in the last line
 */
function setTwitterData(token, tokenSecret, profile, callback) {
  console.log("token", token, tokenSecret);
  /** populating the database on login success with access token and secret */
  putUser({
    access_token: token,
    access_token_secret: tokenSecret,
    username: profile.username,
  });
  return callback(null, profile);
}
module.exports.twitterStrategy = new TwitterStrategy(
  twitterConfig,
  setTwitterData
);
