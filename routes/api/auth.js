const express = require("express");
let _ = express.Router();
// import from controllers
const registationController = require("../../controler/registationControllers");
const loginController = require("../../controler/loginController");
const emailVerificationOptMatch = require("../../controler/emailVerificationOtpMatch");
const {
  becomeMerchantController,
} = require("../../controler/mechantController");

// start create route
_.post("/registation", registationController);
_.post("/login", loginController);
_.post("/emailverificationOtp", emailVerificationOptMatch);
_.post("/becomemerchant", becomeMerchantController);

module.exports = _;
