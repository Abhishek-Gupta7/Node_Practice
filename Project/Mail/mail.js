const nodemailer = require('nodemailer');

const sendMail = async() => {
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "420e5d086df4f5",
          pass: "438497848ac11b"
        }
      });
    
    //   mail option
    
    const mailOption = {
        from:'Abhi <abhishekgupta@nimapinfotech.com>',
        to : 'Abhi <abhishekgupta@nimapinfotech.com>',
        subject : 'Subject',
        text : 'Mail Text...'
    }
    
    await transport.sendMail(mailOption);
}

module.exports = sendMail;