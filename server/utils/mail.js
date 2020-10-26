const mailer = require('nodemailer');

module.exports = async (from, to, subject, text, html) => {

    let emailUser;
    let emailPassword;


    if (process.env.NODE_ENV !== 'production') {
        const account = mailer.createTestAccount();
        // create test account for development
        emailUser = account.user;
        emailPassword = account.pass;
    } else {
        emailUser = process.env.EMAIL_USER;
        emailPassword = process.env.EMAIL_PASSWORD;
    }

    const transporter = mailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: emailUser,
            pass: emailPassword
        }
    })
    
    // send email
    await transporter.sendMail({ from: from, to: to, subject: subject,
        text: text, html: html
    });
}