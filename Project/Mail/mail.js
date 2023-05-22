const nodemailer = require('nodemailer');

class Mail {

  constructor(email,url) {
    this.email = email;
    this.url = url;
    this.from = `${process.env.EMAIL_FROM_NAME} ${process.env.EMAIL_FROM}`;
  }

  async newTransport(){
    let transport;
    // if (process.env.NODE_ENV === 'production') {
    //   return 1;
    // }

    transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "420e5d086df4f5",
        pass: "438497848ac11b"
      }
    });
    return transport;

  }

  async send(template , subject){
    // render html

    const mailOption = {
      from : this.from,
      to : 'Abhi <abhishekgupta12@nimapinfotech.com>',
      subject : `${subject}`,
      text : 'Mail From Server🐧...'
  }

  // console.log(await this.newTransport());
  let transport = await this.newTransport();
  let result = await transport.sendMail(mailOption);
  console.log(result);
  }

  async sendWelcome(){
    await this.send("Welcome","Welcome to subject");
  }



}

module.exports = Mail;


// const sendMail = async() => {
//     const transport = nodemailer.createTransport({
//         host: "sandbox.smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//           user: "420e5d086df4f5",
//           pass: "438497848ac11b"
//         }
//       });
    
//     //   mail option
    
//     const mailOption = {
//         from:'Abhi <abhishekgupta1213@nimapinfotech.com>',
//         to : 'Abhi <abhishekgupta12@nimapinfotech.com>',
//         subject : 'Subject',
//         text : 'Mail From Server...'
//     }
    
//     let result = await transport.sendMail(mailOption);
//     console.log(result);
// }

// module.exports = sendMail;

