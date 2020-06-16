/** we use express-session library to maintain session in cookies.
 *  the sessionId is used to maintain connection */
const session = require("express-session");
const app = require("./exp");
const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
};

/** customize session properties for app */
const customSession = session(sessionConfig);
app.use(customSession);
module.exports.sessionConfig = sessionConfig;
