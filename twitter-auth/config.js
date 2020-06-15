// module.exports.config = {
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_KEY_SECRET,
//   access_token: "1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",
//   access_token_secret: "kdG95HrGaKJxw3QuUCWwE6usHRroZw5pJoEkj7ZX56pS0",
// };

module.exports.config = {
  consumer_key: "jr6lW92juTEQ1Dx9AfjfCDqfj",
  consumer_secret: "ByhNevd208TvkXLX9DO8ydV1iOZIq2eQHuHygwuNN0Rw94ucli",
  access_token: "",
  access_token_secret: "",
};
module.exports.sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
};

module.exports.twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_KEY_SECRET,
  callbackURL: "/api/twitter",
};
// proxy: true,
