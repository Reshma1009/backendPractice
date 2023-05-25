const nodemailer = require("nodemailer");

let emailverification = async(email,subject,template,otp) =>
{
 // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` "Reshme Nila" < >`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: template(otp), // html body
  });
};
module.exports= emailverification