const express = require('express');
const app = express();
const Otp = require('../../Models/Otp')
const studentSchema = require('../../Models/Student')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const email_send =async (req,res)=>{
    
    const {email}= req.body

    let data = await studentSchema.findOne({email:email})
    
    const responseType = {};
    try{
        if (!data){
            responseType.statusText = " error present"
            responseType.message = "  mail id not exists"
            
    
        }
        else{
             let otpCode = Math.floor((Math.random()*100000) +1);
            let otpData = new  Otp({
                _id: new mongoose.Types.ObjectId(),
                email:req.body.email,
                otp:otpCode,
                // expireIn :new Date().getTime() + 300*10000
            })
            let otpResponse =  otpData.save();
            mailer(email,otpCode)
            responseType.statusText = " successful"
            responseType.message = " please check your mail id"
    
            
        }
        res.status(200).json(responseType)
    }
    catch(err){
        console.warn(err)
    }
    
}


const change_password= async (req, res) => {
    const { otp, email, password } = req.body;
    if (!otp) {
        return res.status(400).json({ error: "Please fill OTP" });
    }
    else {
        const resetUser = await Otp.findOne({ email: email });
        
        if (resetUser) {

            const matchOtp = await Otp.findOne({ otp: otp, email: email, isExpire: false });
            if (matchOtp) {
                const timerOtp = matchOtp.date;
                const checkEx = new Date() - timerOtp
                console.log("Time difference", checkEx)

                

                if (matchOtp) {
                    const logUser = await studentSchema.findOne({ email: email });
                    
                    if (checkEx < 1000000) {
                        logUser.password = req.body.password;
                        matchOtp.isExpire = true;
                        matchOtp.save();
                        logUser.save();
                        return res.status(202).json({ message: "OTP Matched and Password Updated.." });
                    }
                    else {
                        console.log("OTP Expire")
                        return res.status(405).json({ message: "OTP Expire...." });
                    }
                }
                else {
                    console.log("Eroor...");
                    // if(checkEx > 100000){
                    //     matchOtp.isExpire = true;
                    //     matchOtp.save();
                    // }
                    return res.status(404).json({ message: "Wrong OTP.." });
                }
            }
            else {
                return res.status(404).json({ message: "Wrong OTP.." });
            }

        }
        else {
            return res.status(404).json({ error: "User Not Found" });
        }
    }
}



// nodeMailer


const mailer = (email,otp) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 587,
        secure : false,
        auth:{
            user:'nitish.vibgyorweb@gmail.com',
            pass:'nitishrai1'
        }
    });

    var mailOptions = {
        from:'nitish.vibgyorweb@gmail.com',
        to:'maacnitishrai@gmail.com',
        subject:'sending email',
        text:`${otp}`
    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log('email sent:' + info.response)
        }
    });

}


module.exports ={
    email_send,
    change_password
}