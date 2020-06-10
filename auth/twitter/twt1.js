const Tw = require("twit");
const conf = {
  consumer_key: "aVvBeJeBfkVGOfSPJEaRTGMQM",
  consumer_secret: "sCMCyrOQ5AIWt0g5pSlszyCUjm5vWAXa9QeT263lwhfQMMDpnD",
  access_token: "1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",
  access_token_secret: "kdG95HrGaKJxw3QuUCWwE6usHRroZw5pJoEkj7ZX56pS0",
};
try {
  var T = new Tw(conf);
  console.log("successfully created twitter client");
} catch (e) {
  console.log("error while creating twitter ", e);
}

T.get("search/tweets", { q: "rainbow" })
  .then((result) => {
    console.log("result is ", result);
    console.log("-------------------------------------------------------");
    console.log("result header  =", result.statuses.headers);
  })
  .catch((error) => {
    console.log("eror is ", error);
  })
  .finally((data) => {
    console.log("finally", data);
  });
