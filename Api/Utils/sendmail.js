const nodemailer = require("nodemailer");
exports.sendEmail = async (email, otp) => {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "seaport@seaport.in.net",
        pass: "khmlraiewqowkbmc"
      },
    })
    await transport.sendMail({
      from: "seaport@seaport.in.net",
      to: email,
      subject: "Seaport Password",
      text:"" ,
      html: `<h4>Your password is:<h4><h2>${otp}<h2>`,
  })
  
  }