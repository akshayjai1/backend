const app = require("./exp");
const passport = require("./passport");

app.get("/twitter/login", passport.authenticate("twitter"));
// app.get("/api/twitter", loginTwitter);
app.get(
  "/api/twitter",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  loginTwitter
);

const port = 3007;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});

function loginTwitter(req, res) {
  res.send("success logged In");
}
