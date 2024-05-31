const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jermain.schulist58@ethereal.email',
        pass: 'YEr5Mr4JHHuNt3sDmR'
    }
});
  let info = await transporter.sendMail({
    from: 'Dipen Patel 👻" <patel@gmail.com>', // sender address
    to: "dipenpatelalpeshbhai@gmail.com", // list of receivers
    subject: "Hello patel", // Subject line
    text: "Hello dipsh ptl", // plain text body
    html: "<b>Hello dipsh ptl</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
