/** passport library calls function
 * 1. serializeUser
 * 2. deserializeUser
 *
 */
module.exports.setSerializationLogic = (passport) => {
  passport.serializeUser((user, callback) => {
    console.log("in serializeUser", user);
    callback(null, user);
  });
  passport.deserializeUser((obj, callback) => {
    console.log("in deSerializeUser", obj);
    callback(null, obj);
  });
};
