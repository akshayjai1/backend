var axios = require("axios");
/**
 * get request to twitter along with authorization
 */

axios({
  url: "https://api.twitter.com/1.1/search/tweets.json?q=rainbow",
  headers: {
    Authorization:
      'OAuth oauth_consumer_key="aVvBeJeBfkVGOfSPJEaRTGMQM",oauth_nonce="e554c1b6bd894038928797885bb74fb0",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1591510864",oauth_token="1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",oauth_version="1.0",oauth_signature="8ftCavRnRRf1Jj50OX3dlMl3h4M%3D"',
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    console.log("json response is ", response);
    return response;
  })
  .catch((err) => {
    console.log("got error while making fetch request to twitter", err);
  });

/* .then((response) => {
    console.log("response is ", response);
    return response.json();
  }) */
