import nodemailer from "nodemailer"
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASS } from "$env/static/private"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_EMAIL_PASS
    }

})

transporter.verify(function (error, success) {
    if (error) {
        console.log(error)
    } else {
        console.log(success)
        console.log("Server is ready to take our messages");
    }
})

export default transporter