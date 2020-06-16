var database = [];
var appConfig = {
  consumer_key: "jr6lW92juTEQ1Dx9AfjfCDqfj",
  consumer_secret: "ByhNevd208TvkXLX9DO8ydV1iOZIq2eQHuHygwuNN0Rw94ucli",
};
function putUser(user) {
  database.push(user);
}

module.exports.database = database;
module.exports.putUser = putUser;
module.exports.appConfig = appConfig;
