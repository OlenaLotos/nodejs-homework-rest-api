const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "olenameshanych@gmail.com" };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

// const email = {
//   to: "olenameshanych@gmail.com",
//   from: "olenameshanych@gmail.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<p>and easy to do anywhere, even with Node.js</p>",
// };

module.exports = sendEmail;
