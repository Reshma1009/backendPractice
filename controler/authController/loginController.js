const bcrypt = require("bcrypt");

const Users = require("../../models/userModels.js");
const validateEmail = require("../../helpers/emailValidation.js");

let loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({ error: "Email is required" });
  } else if (validateEmail(email)) {
    return res.json({ error: "Email is invalid" });
  } else if (!password) {
    return res.json({ error: "Password is required" });
  } else {
    const existingUser = await Users.find({ email });
    // existingUser[0].email.includes(email) another way to search in elemnt in array of object

    if (existingUser[0].email.includes(email)) {
      bcrypt.compare(
        password,
        existingUser[0].password,
        function (err, result) {
          if (result) {
            //  successFull message after Login
            res.send({
              success: "Login Successfull",
              fullName: existingUser[0].fullName,
              email: existingUser[0].email,
            });
          } else {
            res.json({ error: "Cradincial/pass is not match" });
          }
        }
      );
    } else {
      res.json({ error: "Cradincial/email is not match" });
    }
  }
};
module.exports = loginController;
