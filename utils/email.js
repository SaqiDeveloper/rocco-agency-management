const nodemailer = require("nodemailer");

module.exports.sendEmail = async ({ to, subject, description }) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_SENDER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  const message = {
    from: process.env.MAILER_SENDER_EMAIL,
    subject: subject,
    html: description,
    to: to,
  };

  const email = await transporter.sendMail(message);
  console.log("MailId", email.messageId);
};
