module.exports = function() {
  return function(req, res, next) {
    req.myLogger = Date();
    next();
  };
};
