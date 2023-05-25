const express = require("express");
let _ = express.Router();
// import from controllers
const registationController = require( "../../controler/authController/registationControllers" );
const loginController = require( "../../controler/authController/loginController" );
const emailVerificationOptMatch = require( "../../controler/authController/emailVerificationOtpMatch" );

// start create route
_.post("/registation", registationController);
_.post("/login", loginController);
_.post("/emailverificationOtp", emailVerificationOptMatch);

module.exports = _;
