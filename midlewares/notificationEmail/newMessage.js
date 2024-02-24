require('dotenv').config();
const nodemailer = require("nodemailer");

// Notification nouveau message.
function NewMessage (emailUser, name, phone, message) {
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: `${process.env.SEND_MAIL_USER}`,
                pass: `${process.env.SEND_MAIL_PASSWORD}`
            }
        })
        const mail_configs = {
            from: `"choosews" <${process.env.SEND_MAIL_USER}>`,
            to: `${process.env.EMAIL_ADMIN}`,
            subject: "choosews : Nouveau contact",
            html: `
                <div style="font-family: Montserrat, poppins, sans-serif; padding: 10px 30px">
                    <p><span style="font-weight: bold">Name :</span> ${name}</p>
                    <p><span style="font-weight: bold">E-mail:</span> ${emailUser}</p>
                    <p><span style="font-weight: bold">Téléphone:</span> ${phone}</p>
                    <p><span style="font-weight: bold">Contenu du message :</span></p>
                    <p style="white-space: pre-line">${message}</p>
                </div>
            `
        }
        transporter.sendMail(mail_configs, function(error, info){
            if(error){
                console.log(error);
                return reject({message: `An error has occured`});
            }
            return(resolve({message: "Email send succesfuly"}));
        })
    })
}

module.exports = {
    NewMessage
};