const express = require("express");
let _ = express.Router();
// import from controllers
const registationController = require( "../../controler/authController/registationControllers" );
const loginController = require( "../../controler/authController/loginController" );
const emailVerificationOptMatch = require( "../../controler/authController/emailVerificationOtpMatch" );
const { becomeMerchantController } = require( "../../controler/authController/becomeMechantController" );

// start create route
_.post("/registation", registationController);
_.post("/login", loginController);
_.post("/emailverificationOtp", emailVerificationOptMatch);
_.post("/becomemerchant", becomeMerchantController);

module.exports = _;
