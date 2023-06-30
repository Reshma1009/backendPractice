const express = require("express");
const { securedProduct, createProduct, createVariant } = require( "../../controler/productController" );
let _ = express.Router();
_.post("/createproduct", securedProduct, createProduct);
_.post("/createvariant", createVariant);
module.exports = _;
