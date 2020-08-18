const { getFromTwitter } = require("./getData");
module.exports.handleTwitterLoginRedirect = async function (req, res) {
  const result = await getFromTwitter();
  res.send(result);
};
module.exports.handleTwitterFailureRedirect = async function (req, res) {
  res.send("User not authenticated");
};
