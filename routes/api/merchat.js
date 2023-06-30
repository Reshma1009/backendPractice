const express = require( "express" );
const { becomeMerchantController } = require( "../../controler/mechantController" );
const _ = express.Router();

_.post("/becomemerchant", becomeMerchantController)


module.exports = _;