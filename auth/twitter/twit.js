const Tw = require("twit");
const Twl = require("twitter-lite");
const { reset } = require("nodemon");
const config = {
  //   subdomain: "cors-anywhere.herokuapp.com/https://api",
  consumer_key: "l7ZOSz5VwmfgiQBVEXT8PvZ2O",
  consumer_secret: "pPpamsLn8ZUZaI1fMDhz1o9w00wx3kDTl4r8Cun4ajdzxon7RQ",
  access_token: "1681758896-1681758896-ossFSOrs38ZZRrjRG9fBG8Qpb9RB7H3LwUoela2",
  access_token_secret: "m9AO59jF0Y6g8Wi1DplcBtpbEMuhJbK49Irp4Rk4dtffd",
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // strictSSL:            true,     // optional - requires SSL certificates to be valid.
};

const conf = {
  consumer_key: "aVvBeJeBfkVGOfSPJEaRTGMQM",
  consumer_secret: "sCMCyrOQ5AIWt0g5pSlszyCUjm5vWAXa9QeT263lwhfQMMDpnD",
  access_token: "1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",
  access_token_secret: "kdG95HrGaKJxw3QuUCWwE6usHRroZw5pJoEkj7ZX56pS0",
};
const conf1 = {
  consumer_key: "aVvBeJeBfkVGOfSPJEaRTGMQM",
  consumer_secret: "sCMCyrOQ5AIWt0g5pSlszyCUjm5vWAXa9QeT263lwhfQMMDpnD",
  access_token_key: "1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",
  access_token_secret: "kdG95HrGaKJxw3QuUCWwE6usHRroZw5pJoEkj7ZX56pS0",
};

try {
  var T = new Tw(conf1);
  //   var T = new Twl(conf);
  console.log("successfully created twitter client");
} catch (e) {
  console.log("error while creating twitter ", e);
}

// function post() {
/* try {
    const result = await T.get("search/tweets", { q: "rainbow" });
    console.log("successfully got twitter entries", result);
  } finally {
    catch (er) {
    console.log("got error in twitter api", er);
  }

    console.log("finally");
  } */

// post();

T.get("search/tweets", { q: "rainbow" })
  .then((result) => {
    console.log("result is ", result);
  })
  .catch((error) => {
    console.log("eror is ", error);
  })
  .finally((data) => {
    console.log("finally", data);
  });
