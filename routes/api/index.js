const express = require("express");
let _ = express.Router();
let registation= require("./auth.js")
_.use("/auth", registation);
module.exports = _;
