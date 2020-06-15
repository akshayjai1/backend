const app = require("./exp");
const passport = require("./passport");
const { getFromTwitter } = require("./getData");
//1 called from front-end
app.get("/", (req, res) => {
  // res.send("hi");
  res.sendFile(__dirname + "/h/index.html");
  // res.sendFile(__dirname + "/html/index.html");
});
app.get("/twitter/login", passport.authenticate("twitter"));

// 2 url which will be redirected by twitter
app.get(
  "/api/twitter",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  loginTwitter
);

const port = 3007;
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});

async function loginTwitter(req, res) {
  const result = await getFromTwitter();
  res.send(result);
  // res.redirect("http://localhost:8081/html/async.html");
  // res.send("success logged In");
}
