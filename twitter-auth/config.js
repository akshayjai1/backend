module.exports.config = {
  consumer_key: "jr6lW92juTEQ1Dx9AfjfCDqfj",
  consumer_secret: "ByhNevd208TvkXLX9DO8ydV1iOZIq2eQHuHygwuNN0Rw94ucli",
  access_token: "",
  access_token_secret: "",
};
module.exports.twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_KEY_SECRET,
  callbackURL: "/twitter/loginSuccess",
};
