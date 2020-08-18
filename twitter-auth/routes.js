const app = require('./exp');
require('./session');
const passport = require('./passport');

const {
  handleTwitterLoginRedirect,
  handleTwitterFailureRedirect,
} = require('./routeHandlers');

/** G1 serves index.html */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});
/** G2 get's called when we click on login Using Twitter */
app.get('/twitter/login', passport.authenticate('twitter'));

/* G3 url which will be redirected by api.twitter.com on successful login */
app.get(
  '/twitter/loginSuccess',
  passport.authenticate('twitter'),
  handleTwitterLoginRedirect
);

// app.get("/twitter/loginFailure", handleTwitterFailureRedirect);
