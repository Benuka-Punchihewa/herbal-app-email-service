const NotFoundError = require("../error/error.classes/NotFoundError");
const EmailService = require("./email.service");
const { StatusCodes } = require("http-status-codes");

const sendEmail = async (req, res) => {
  const { toList, subject, htmlBody } = req.body;
  if (!toList) throw new NotFoundError("Receiver list is required!");
  if (!subject) throw new NotFoundError("Subject is required!");
  if (!htmlBody) throw new NotFoundError("HTML body is required!");

  await EmailService.sendEmail(toList, subject, htmlBody);
  return res.status(StatusCodes.OK).json({ message: "Email Sent!" });
};

module.exports = { sendEmail };
