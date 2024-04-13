const express = require("express");
const EmailController = require("./email.controller");
const AuthMiddleware = require("../auth/auth.middleware");
const constants = require("../../constants");

const router = express.Router();

// send email
router.post(
  "/",
    AuthMiddleware.authorize([constants.ACCESS.ROLES.SERVICE]),
  EmailController.sendEmail
);

module.exports = router;
