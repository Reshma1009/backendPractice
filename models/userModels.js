let mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  updated: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  avater: {
    type: String,
  },
  merchant: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "member",
    enum: ["admin", "member", "merchant"],
  },
  facebookId: {
    type: String,
  },
  linkdinId: {
    type: String,
  },
  OtpStore: {
    type: String,
  },
});
module.exports= mongoose.model("UserRegistation",userSchema)