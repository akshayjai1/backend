module.exports = {
  mid: function middle(req, res, next) {
    console.log("hi");
    next();
  },
  secondMid: function secondMiddle(req, res, next) {
    console.log("second middleware");
    next();
  },
};
