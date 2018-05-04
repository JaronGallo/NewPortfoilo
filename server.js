const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path');
const app = express();




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'build')));
app.post('/api/form', (req,res) => {
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
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'm4vltsn4dlbde6wn@ethereal.email',
          pass: 'v7n487ysfyTqZuZGY8'
      }
  })

  let mailOptions = {
    from:'test@testaccount.com',
    to: 'm4vltsn4dlbde6wn@ethereal.email',
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
})

  })
})

        
        app.get('*', function (request, response){
          response.sendFile(path.resolve(__dirname, '../build', 'index.html'))
      })
       
        // Dont forget to change back to 80
app.listen(process.env.PORT || 80);

console.log("works");