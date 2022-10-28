const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
// const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exsist`);
  }
  // складніший спосіб створення користувача з хешуванням паролю

  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, subscription, avatarURL });

  // легший  спосіб створення користувача з хешуванням паролю
  //   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //   const result = await User.create({
  //     email,
  //     password: hashPassword,
  //     subscription,
  //   });
  newUser.setPassword(password);

  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    date: {
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
    // result,
  });
};

module.exports = register;
