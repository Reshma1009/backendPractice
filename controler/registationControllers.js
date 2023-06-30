const bcrypt = require("bcrypt");

const Users = require("../models/userModels.js");
const validateEmail = require("../helpers/emailValidation.js");
const emailverification = require("../helpers/emailVerification.js");
const otp = require("../helpers/token.js");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registationController = async (req, res) => {
  //  Get data from user
  const {
    fullName,
    email,
    password,
    verified,
    createdAt,
    merchant,
    avater,
    updated,
    facebookId,
    linkdinId,
    role,
  } = req.body;
  //  Name and other info check is it empty or full
  if (!fullName) {
    return res.json({ error: "Fullname is required" });
  } else if (!email) {
    return res.json({ error: "Email is required" });
  } else if (validateEmail(email)) {
    return res.json({ error: "Email is invalid" });
  } else if (!password) {
    return res.json({ error: "Password is required" });
  } else {
    //  Duplicate mail check is it already exists
    let duplicateMail = await Users.find({ email });
    if (duplicateMail.length > 0) {
      return res.json({ error: "Email is Exists" });
    }
    // Passowrd Hash by bcrypt
    bcrypt.hash(password, 10, async function (err, hash) {
      //  Create new user for database
      let user = new Users({
        fullName,
        email,
        password: hash,
        verified,
        createdAt,
        merchant,
        avater,
        updated,
        facebookId,
        linkdinId,
        role,
      });
      //  Save user in database
      user.save();
      // Random num generator by vanila js
      let randomGenum = () => {
        const randomNum = Math.round(Math.random() * 10000);
        let stringNumRandom = randomNum + "";
        if (stringNumRandom.length == 4) {
          return randomNum;
        } else {
          return randomGenum();
        }
      };
      const randomStore = randomGenum();
      //  random number set in database
      const randomNumSendDb = await Users.findOneAndUpdate(
        { email },
        { $set: { OtpStore: randomStore } },
        { new: true }
      );
      //  random runber generate by sir Method
      const generator2 = aleaRNGFactory(Date.now());
      const rNumGen = generator2.uInt32().toString().substring(0, 4);
      //  Send Email varification
      emailverification(user.email, "Email verification ", otp, randomStore);
      // Opt Deleted
      setTimeout(async () => {
        console.log("Otp deleted");
        const randomNumSendDb = await Users.findOneAndUpdate(
          { email },
          { $unset: { OtpStore: "" } },
          { new: true }
        );
      }, 90000);
      //  successFull message after registation
      res.send({
        success: "Registation Successfull, Please check your Email",
        fullName: user.fullName,
        email: user.email,
      });
    });
  }
};

module.exports = registationController;
