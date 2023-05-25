const Users = require("../../models/userModels.js");

let emailVerificationOptMatch = async (req, res) => {
  const { email, otp } = req.body;
  const otpMatch = await Users.find({ email });
  // console.log(otpMatch[0].OtpStore.includes(otp));
  if (otpMatch[0].email.includes(email)) {
    if (otpMatch[0].OtpStore == otp) {
      const randomNumSendDb = await Users.findOneAndUpdate(
        { email },
        { $unset: { OtpStore: "" } },
        { new: true }
      );
      res.json({ success: "otp Matched" });
    } else {
      res.json({ error: "otp Not matched " });
    }
  }
  // if (otpMatch.length > 0) {
  //   if (otpMatch[0].OtpStore == otp) {
  //     /* const randomNumSendDb = await Users.findOneAndUpdate(
  //       { email },
  //       { $unset: { OtpStore: "" } },
  //       { new: true }
  //     ); */
  //     res.json({ success: "otp Matched" });
  //   } else {
  //     res.json({ error: "otp Not matched " });
  //   }
  // }
};
module.exports = emailVerificationOptMatch;
