const express = require("express");
let _ = express.Router();
const apiRoutes = require("./api");

const api = process.env.BASE_URL;
_.use(api, apiRoutes)
_.use(api, (req, res) => {
  res.json({ error: "No Api found on this routes" });
});
module.exports = _;
