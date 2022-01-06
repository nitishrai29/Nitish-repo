const express = require('express');
const app = express();
const Otp = require('../../Models/Otp')
const studentSchema = require('../../Models/Student')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const resend = require('./ResendOtp')

const email_send = async (req, res) => {

    const { email } = req.body
    const find= await Otp.findOne({email:email})
    if(!find){
        let data = await studentSchema.findOne({ email: email })

    const responseType = {};
    try {
        if (!data) {
            responseType.statusText = " error present"
            responseType.message = "  mail id not exists"


        }
        else {
            let otpCode = Math.floor((Math.random() * 100000) + 1);
            let otpData = new Otp({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                otp: otpCode,
                // expireIn :new Date().getTime() + 300*10000
            })
            let otpResponse = otpData.save();
            mailer(email, otpCode)
            responseType.statusText = " successful"
            responseType.message = " please check your mail id"


        }
        res.status(200).json(responseType)
    }
    catch (err) {
        console.warn(err)
    }

    }else{
        resend.resendOtp
        console.log("An email has been sent, please check your Email")
        return res.status(200).json({ message: "Check Email" });
    }
    
}

const verify_Otp = async (req, res) => {
    const { otp, email } = req.body;
    if (!otp) {
        return res.status(400).json({ error: "Please fill OTP" });
    }
    else {
        const setUser = await Otp.findOne({ email: email });

        if (setUser) {

            const match = await Otp.findOne({ otp: otp, isExpire: false });
            if (match) {
                const timer = match.updatedAt;
                const expire = new Date() - timer
                console.log("Time Gap", expire)

                if (expire < 100000) {
                    match.isExpire = true
                    // match.save()
                    return res.status(200).json({ message: "otp Matched" });

                } else {
                    console.log("OTP Expired")
                    return res.status(405).json({ error: "OTP Expire...." });

                }
            } else {
                return res.status(400).json({ error: "otp Doesn't Matched" });

            }

        } else {
            return res.status(404).json({ error: "User Not Found" });

        }
    }
}


const change_password = async (req, res) => {
    const { otp, email, password } = req.body;
    // const match = await Otp.findOne({ otp: otp, email: email });
    // console.log(match)
    // if (match.isExpire===false) {
        const User = await studentSchema.findOne({ email: email });

        if (User) {
            User.password = req.body.password;
            User.save();
            return res.status(202).json({ message: "Password Updated.." });
        }


        else {
            console.log("user not found")
            return res.status(405).json({ error: "Input valid email...." });
        }
    }
    // else {
    //     console.log("Error");

    //     return res.status(404).json({ message: "Wrong OTP.." });
    // }





// nodeMailer


const mailer = (email, otp) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'nitish.vibgyorweb@gmail.com',
            pass: 'nitishrai1'
        }
    });

    var mailOptions = {
        from: 'nitish.vibgyorweb@gmail.com',
        to: 'maacnitishrai@gmail.com',
        subject: 'sending email',
        text: `OTP : ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('email sent:' + info.response)
        }
    });

}


module.exports = {
    email_send,
    change_password,
    verify_Otp
}