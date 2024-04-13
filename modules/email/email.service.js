const nodemailer = require("nodemailer");

const sendEmail = async (toList, subject, htmlBody) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ETHEREAL_USERNAME, // ethereal user
      pass: process.env.ETHEREAL_PASSWORD, // ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Herbal App", // sender address
    to: toList, // list of receivers
    subject: subject, // Subject line
    html: htmlBody, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = { sendEmail };
