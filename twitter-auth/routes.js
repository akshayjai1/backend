const app = require("./exp");
require("./session");
const passport = require("./passport");
const { getFromTwitter } = require("./getData");
//1 called from front-end
app.get("/", (req, res) => {
  // res.send("hi");
  res.sendFile(__dirname + "/html/index.html");
});
app.get("/twitter/login", passport.authenticate("twitter"));

/* 2 url which will be redirected by api.twitter.com on successful login */
app.get(
  "/twitter/loginSuccess",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  handleTwitterLoginRedirect
);

app.get("/twitter/loginFailure");

const port = 3007;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});

async function handleTwitterLoginRedirect(req, res) {
  const result = await getFromTwitter();
  res.send(result);
}
async function handleTwitterFailureRedirect(req, res) {
  const result = await getFromTwitter();
  res.send(result);
}
