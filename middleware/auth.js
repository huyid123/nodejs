const jwt = require("jsonwebtoken");
const utils = require("../utils");
const config = require("../config/configJWT");

module.exports = {
  async auth(req, res, next) {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    // decode token
    if (token) {
      // Xác thực mã token và kiểm tra thời gian hết hạn của mã
      try {
        const decoded = await utils.verifyJwtToken(
          token,
          config.secretSignature
        );
        req.decoded = decoded;
        next();
      } catch (err) {
        console.error(err);
        return res.status(401).json({
          message: "Unauthorized access.",
        });
      }
    } else {
      return res.status(403).send({
        message: "No token provided.",
      });
    }
  },
};
