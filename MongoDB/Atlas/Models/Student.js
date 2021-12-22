const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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


studentSchema.pre('save', async function(next){
    console.log("hi")
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password,12);
        this.cnfrmPassword = bcrypt.hash(this.cnfrmPassword,12);
    }
    next();
}) 

module.exports= mongoose.model('students', studentSchema)


 