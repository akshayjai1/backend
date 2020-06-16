var Twit = require("twit");
const { database, appConfig } = require("./database");
/**
 * function to get tweets from twiter;
 */
async function getFromTwitter() {
  if (database.length == 0) {
    return "User not authenticated";
  } else if (database.length > 0) {
    let lastIndex = database.length - 1;
    var configuration = {
      ...appConfig,
      access_token: database[lastIndex].access_token,
      access_token_secret: database[lastIndex].access_token_secret,
    };
    var TwitClient = new Twit(configuration);
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
}
module.exports.getFromTwitter = getFromTwitter;
