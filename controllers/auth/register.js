const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { sendEmail } = require("../../helpers");
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

  const verificationToken = nanoid();

  const newUser = new User({
    email,
    subscription,
    avatarURL,
    verificationToken,
  });

  // легший  спосіб створення користувача з хешуванням паролю
  //   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //   const result = await User.create({
  //     email,
  //     password: hashPassword,
  //     subscription,
  //   });
  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Confirm your email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    date: {
      user: {
        email,
        subscription,
        avatarURL,
        verificationToken,
      },
    },
    // result,
  });
};

module.exports = register;
