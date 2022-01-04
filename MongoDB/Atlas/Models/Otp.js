const mongoose =require('mongoose');
// const req = require('express/lib/request');

const otpScma= new mongoose.Schema({
    email: {type: String},
    otp : {type:Number},
    date: { 
        type: Date,
        default: Date.now
    },
    isExpire:{
        type:Boolean,
        default:false
    }
})

const Otp= mongoose.model('Otp', otpScma);

module.exports= Otp;