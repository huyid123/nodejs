const user = require("../models").user;
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  list(req, res) {
    return user
      .findOne({ where: { email: email } })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(404).send(error));
  },

  async register(req, res) {
    var account = ({ email, password } = req.body);
    // const count1 = async email => {return await user.findOne({
    //   where: {email: req.params.email}
    // })}
    return user
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

    //count1 = count1.get({plain: true});
    // console.log("aaaaa");
    // console.log(count1);
    // if (count1.email == null){
    //   count1.email='';
    // }
    // if (account.email == count1.email) {
    //   res.json({
    //     message: "Email already exits!",
    //   });
    // }
    // else {
    //   console.log("email")
    //   console.log(account.email);
    //   console.log("pass")
    //   console.log(account.password);
    //   return user
    //     .create({ email, password })
    //     .then((user) => res.status(200).send(user))
    //     .catch((error) => res.status(404).send(error));
    // }
  },

  login(req, res) {
    const account = ({ email, password } = req.body);
    return user
      .findOne({
        where: { email: req.body.email, password: req.body.password },
      })
      .then((users) => {
        if (!users) {
          return res.send({message: 'Account already not exist'})
        } else {
          const token = jwt.sign(
            { account: account },
            config.secretSignature,
            {
              algorithm: "HS256",
              expiresIn: config.tokenLife,
            },
            // (err, token) => {
            //   if (err) {
            //     return res.err;
            //   }
            //   res.json({
            //     token,
            //   });
            // }
          );
          const refreshToken = jwt.sign(
            { account: account },
            config.secretSignature,
            {
              algorithm: "HS256",
              expiresIn: config.refreshTokenLife,
            }
          );
          return res.json({token, refreshToken})
        }
      });

    
  },
};
