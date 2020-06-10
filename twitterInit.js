const Tw = require("twit");
const { config } = require("./twitter-auth/config");

const { defaultConfiguration } = require("./auth/twitter/exp");
var T = new Tw(config);

module.exports.getFromTwitter = async function getFromTwitter() {
  try {
    const result = await T.get("search/tweets", { q: "rainbow" });
    console.log("successfully fetched from twitter");
    return result;
  } catch (err) {
    console.log("error fetching from twitter");
    console.log(err);
  }
};
