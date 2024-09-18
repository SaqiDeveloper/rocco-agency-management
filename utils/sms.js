const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports.sendSMS = ({ otp, to }) => {
  return client.messages.create({
    body: `Your TurboCredit account verification OTP is : ${otp}.`,
    messagingServiceSid: process.env.MESSAGE_SERVICE_ID,
    to: `+${to}`,
  });
};
