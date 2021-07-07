const nodemailer = require("nodemailer")
require('dotenv').config()

class EmailController{
    async email(req, res) {

        // TRANSPORTER
        var transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD
            }
        });

        // SEND EMAIL
        let info = await transporter.sendMail({
            from: 'ryan@example.com', // sender address
            to: 'customer@example.com', // receivers
            subject: "Welcome", // Subject line
            text: "Hello world, babe", // plain text body
            html: "<b>Hello world</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        return res.send('success send')
    }
}

module.exports = new EmailController()