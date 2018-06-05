const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path');

const app = express();

require('dotenv').config({path: __dirname + '/.env'});


const USER = process.env.USER;
const PASS = process.env.PASS;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));


app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3> Contact Detail</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <p>Message: ${req.body.message}</p>
    </ul>
    `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: "false",
      port: 25,
      auth: {
        user: USER,
        pass: PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: 'test@testaccount.com',
      to: 'jarongallo@gmail.com',
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: %s', info.message);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});



// Dont forget to change back to 80 also proxy to 80
app.listen(process.env.PORT || 80);

console.log("works");