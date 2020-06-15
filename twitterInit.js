const Twit = require("twit");
const { config } = require("./twitter-auth/config");

var TwitClient = new Twit(config);
async function getFromTwitter() {
  try {
    const result = await TwitClient.get("search/tweets", { q: "rainbow" });
    console.log("successfully fetched from twitter");
    console.log(result);
    return result;
  } catch (err) {
    console.log("error fetching from twitter");
    console.log(err);
  }
}
module.exports.getFromTwitter = getFromTwitter;
getFromTwitter();
