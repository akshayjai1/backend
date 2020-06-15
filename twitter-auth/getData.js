var Twit = require("twit");
const { database, appConfig } = require("./data");

// access_token: database[database.length - 1]?.access_token,
// access_token_secret: database[database.length - 1]?.access_token_secret,
// var configuration = {
//   ...appConfig,
//   access_token: database[0].access_token,
//   access_token_secret: database[0].access_token_secret,
// };

async function getFromTwitter() {
  var acc = database[0] && database[0].access_token;
  var accs = database[0] && database[0].access_token_secret;
  var configuration = {
    ...appConfig,
    access_token: acc,
    access_token_secret: accs,
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
module.exports.getFromTwitter = getFromTwitter;
