const mongoose = require("mongoose");

let dbConnection = () =>
{
mongoose.connect(process.env.MONGODBURL).then(() => console.log("Connected!"));
};

module.exports = dbConnection;