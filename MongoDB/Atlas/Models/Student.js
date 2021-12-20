const mongoose = require('mongoose')

const studentSchema= new mongoose.Schema({
    
    //  _id: mongoose.Schema.Types.ObjectId,
    
    name:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
    },

    email:{
        type:String,
        required:true
    },

    gender:{
        type:String,
    },

    standard:{
        type: Number,
        required:true
    },

    mobile:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    cnfrmPassword:{
        type:String,
        required:true
    }


})

module.exports= mongoose.model('students', studentSchema)