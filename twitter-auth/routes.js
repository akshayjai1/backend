const app = require('./exp');
const passport = require('./passport');

function loginTwitter(req, res) {
  console.log('req is ', req);
  res.send('success logged In');
}
app.get('/twitter/login', passport.authenticate('twitter'));
app.get('/api/twitter', loginTwitter);
const port = 3007;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});
