const express = require("express");
let _ = express.Router();
let registation= require("./auth.js")
let category= require("./category.js")
_.use("/auth", registation);
_.use(category);
module.exports = _;
