const express = require("express");
let _ = express.Router();
let registation = require("./auth.js");
let category = require("./category.js");
let merchant = require("./merchat.js");
let product = require("./products.js");
_.use("/auth", registation);
_.use("/category", category);
_.use("/merchant", merchant);
_.use("/product", product);
module.exports = _;
