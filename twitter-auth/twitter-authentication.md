# starting the app
npm i
npm run twitter-auth

# components
1. twitter-auth/exp.js --> defines the express server with cors enabled and read the .env file from project, using dotenv library
2. twitter-auth/passport.js --> 
* 2.1 configures passport to use twitter strategy and creates strategy by passing twitter app's, 
    a. consumer_key,secret and callback
    b. callback function to be called when authentication is successful
* 2.2 before 2.1, we have to create twitterStrategy using `passport-twitter` library, app's consumer key,secret and callback url=`"/twitter/loginSuccess"` , this callback url should match the one on application settings

3. we use express-session library to maintain session in cookies. the sessionId is used to maintain connection

4. 