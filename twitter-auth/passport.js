const passport = require('passport');
const app = require('./exp');

const { twitterStrategy } = require('./strategy');
const { setSerializationLogic } = require('./serial');

/** customize passport for app */
setSerializationLogic(passport);
passport.use(twitterStrategy);
app.use(passport.initialize());
app.use(passport.session());

module.exports = passport;
