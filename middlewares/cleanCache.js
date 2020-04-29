const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // Trick after the request handler executed. The execution will come back here.
  await next();

  clearHash(req.user.id);
}