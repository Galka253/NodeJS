const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "galyna.mseddi@gmail.com",
    pass: "",
  },
});

var mailOptions = {
  from: "galyna.mseddi@gmail.com",
  to: "galka253@gmail.com",
  subject: "hello galina",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
