const user = require("../models").user;
const jwt = require('jsonwebtoken');
const config = require("../config/configJWT");

module.exports = {
  async list(req, res) {
    return await user
      .findOne({ where: { email: email } })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(404).send(error));
  },

  async register(req, res) {
    var account = ({ email, password } = req.body);
    // const count1 = async email => {return await user.findOne({
    //   where: {email: req.params.email}
    // })}
    return await user
      .findOne({
        where: { email: req.body.email },
      })
      .then(function (users) {
        if (!users) {
          return user
            .create({ email, password })
            .then((user) => res.status(200).send(user))
            .catch((error) => res.status(404).send(error));
        } else {
          return res.send({ success: false });
        }
      });
  },

  async login(req, res) {
    const account = ({ email, password } = req.body);
    return await user
      .findOne({
        where: { email: req.body.email, password: req.body.password },
      })
      .then((users) => {
        if (!users) {
          return res.send({ message: "Account already not exist" });
        } else {
          const token = jwt.sign(
            { account: account },
            config.secretSignature,
            {
              algorithm: "HS256",
              expiresIn: config.tokenLife,
            }
          );
          const refreshToken = jwt.sign(
            { account: account },
            config.secretSignature,
            {
              algorithm: "HS256",
              expiresIn: config.refreshTokenLife,
            }
          );
          return res.json({ token, refreshToken });
        }
      });
  },
};
