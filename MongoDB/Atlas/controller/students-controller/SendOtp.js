const express = require('express');
const app = express();
const otpSchema = require('../../Models/otpModel')
const studentSchema = require('../../Models/Student')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const email_send = (req,res)=>{
    
    const {email}= req.body

    let data =  studentSchema.findOne({email:email})
    const responseType = {};
    if (!data){
        responseType.statusText = " error present"
        responseType.message = "  mail id not exists"
        

    }
    else{
         let otpCode = Math.floor((Math.random()*100000) +1);
        let otpData = new  otpSchema({
            _id: new mongoose.Types.ObjectId(),
            email:req.body.email,
            code:otpCode,
            expireIn :new Date().getTime() + 300*10000
        })
        let otpResponse =  otpData.save();
        
        responseType.statusText = " successfullllyyyy"
        responseType.message = " please check your mail id"

        
    }
    res.status(200).json(responseType)
}

const change_password =  (req,res) =>{
    
    let data = otpSchema.find({
        email:req.body.email,
        code:req.body.otpCode
    });

    const response = {}
    {
        if (data)
        {
            let currentTime = new Date.getTime();
            let diff = data.expireIn - currentTime;

            if (diff<0)
            {
                response.message='token expire'
                response.statusText = ' error'
            }else
            {
                let  student = studentSchema.findOne({email:req.body.email})
                student.password = req.body.password;
                student.save();
                response.message='password changesmsuccesfully'
                response.statusText = ' sucess password'
            }
        }
       
        
    }
    res.status(200).json(responseType);
}















const mailer = (email,otp) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 587,
        secure : false,
        auth:{
            user:'bismavibgyorweb@gmail.com',
            pass:'bismamanzoor1'
        }
    });

    var mailOptions = {
        from:'bismavibgyorweb@gmail.com',
        to:'bismahmanxoor1@gmail.com',
        subject:'sending email using node js mongo db',
        text:' thanking you'
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