const Tw = require("twit");
var app = require("./auth/twitter/exp");
console.log("app", app);
const conf = {
  consumer_key: "aVvBeJeBfkVGOfSPJEaRTGMQM",
  consumer_secret: "sCMCyrOQ5AIWt0g5pSlszyCUjm5vWAXa9QeT263lwhfQMMDpnD",
  access_token: "1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",
  access_token_secret: "kdG95HrGaKJxw3QuUCWwE6usHRroZw5pJoEkj7ZX56pS0",
};
//g4
var T = new Tw(conf);
app.get("/getTweets", async function (req, res) {
  T.get("search/tweets", { q: "rainbow" })
    .then((result) => {
      console.log("result is ", result);
      res.send(result);
    })
    .catch((error) => {
      console.log("eror is ", error);
      res.send("there was an error fetching re");
    });
});
// const status = Math.random();
T.post(`statuses/update`, { status: "hi." })
  .then(console.log)
  .catch(console.log);
app.post("/postTweet", (req, res) => {
  const body = req.body;
  T.post(`statuses/update`, { status: body.text })
    .then((tweet) => {
      res.send(tweet);
    })
    .catch((error) => {
      console.log("eror is ", error);
      res.send("there was an error fetching re");
    })
    .finally((res) => {
      console.log("finally", res);
    });
});
const port = 65500;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});

// try {
//   const response = await axios.get("/api/detail1");
//   console.log("response of detail 1", response);
// } catch (error) {
//   console.log("got error while fetching detail1");
// }
