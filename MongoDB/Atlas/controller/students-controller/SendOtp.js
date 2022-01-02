const express = require('express');
const app = express();
const otpSchemas = require('../../Models/otpModel')
const studentSchema = require('../../Models/Student')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const email_send =async (req,res)=>{
    
    const {email}= req.body

    let data = await studentSchema.findOne({email:email})
    // .then((result) => {
    //     res.status(201).json(result);
    // // console.log(result)

    // })
    // .catch(error =>{
    //     console.log(error)
    // } )
    const responseType = {};
    try{
        if (!data){
            responseType.statusText = " error present"
            responseType.message = "  mail id not exists"
            
    
        }
        else{
             let otpCode = Math.floor((Math.random()*100000) +1);
            let otpData = new  otpSchemas({
                _id: new mongoose.Types.ObjectId(),
                email:req.body.email,
                code:otpCode,
                expireIn :new Date().getTime() + 300*10000
            })
            let otpResponse =  otpData.save();
            mailer()
            responseType.statusText = " successful"
            responseType.message = " please check your mail id"
    
            
        }
        res.status(200).json(responseType)
    }
    catch(err){
        console.warn(err)
    }
    
}

// const change_password = async (req,res) =>{
    
//     let data = await otpSchema.find({
//         email:req.body.email,
//         code:req.body.otpCode
//     });

//     const response = {}
//     {
//         if (data)
//         {
//             let currentTime = new Date.getTime();
//             let diff = data.expireIn - currentTime;

//             if (diff<0)
//             {
//                 response.message='token expire'
//                 response.statusText = ' error'
//             }else
//             {
//                 let  student = await studentSchema.findOne({email:req.body.email})
//                 student.password = req.body.password;
//                 student.save();
//                 response.message='password changes succesfully'
//                 response.statusText = ' sucess password'
//             }
//         }
       
        
//     }
//     res.status(200).json(responseType);
// }




const change_password=async(req,res)=>{
    const response = {}
    const {email,code}=req.body
    if (!code) {
        return res.status(400).json({ error: "Please fill OTP" });
    }
    const resetUser = await otpSchemas.findOne({ email: email });
    if(resetUser){
        const matchOtp = await otpSchemas.findOne({ code: code });
        if(matchOtp){

            const logUser = await studentSchema.findOne({ email: email });
            // let hash = bcrypt.hashSync(req.body.password, saltRounds);
            // logUser.password = hash;
            logUser.password = req.body.password;
            logUser.save();
            console.log(resetUser)
            // response.message='password changes succesfully'
            // response.statusText = ' sucess password'
            return res.status(202).json({ message: "OTP Matched and Password Updated.." });
            
        }
        else{
            response.message='"Wrong OTP.."'
            return res.status(202).json({ message: "Wrong OTP.." });
        }
    }
    else{
        return res.status(404).json({ error: "User Not Found" });
    }
}

    // const data = await otpSchemas.findOne({
    //     email:email,
    //     code:code
    // }).then((result)=>{
    //     res.json(result)
    // })

//     console.log(data)

//     const response = {}
//     if(data){
//         let currentTime = new Date().getTime()
//         let diff= data.expireIn - currentTime
        
//         if(diff<0){
//             response.message='token expire'
//             response.statusText = ' error'
//         } else{
//             console.log('otp match', data.code)
            
//             let  student = await studentSchema.findOne({email:req.body.email})

//             student.password = req.body.password;
//             await student.save();
//             response.message='password changes succesfully'
//             response.statusText = ' sucess password'
            
//         }
//     }else{
//         console.log('something went wrong')
//     }


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
        text:'  AA gaya otp'
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