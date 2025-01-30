const nodemailer = require('nodemailer');

const sendMail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });

    let mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

module.exports = sendMail;
JWT_SECRET_KEY = "randomtoken1234567890"
JWT_EXPIRE = 7d

ACTIVATION_SECRET = kjjklhfasdn*&%$%^JHG
SMTP_HOST = smtp.gmail.com

SMTP_PORT = 465
SMTP_EMAIL = rahulrr5002@gmail.com

SMTP_PASSWORD = xpkzsxbnjfuojysq  
SMTP_SERVICE = gmail


