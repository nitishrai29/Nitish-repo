const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getNodeText } = require('@testing-library/react')

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
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]


})



studentSchema.pre('save', async function(next){
   
    
       this.password = await bcrypt.hash(this.password,10);
       
       this.cnfrmPassword = await bcrypt.hash(this.cnfrmPassword,10);
       
    next()
    
}) 

    studentSchema.methods.generateAuthToken = async function(){
     try{
         let token =  jwt.sign({_id:this._id}, "abcdefghijklmnopqrstuvwxyzabcdef")
         this.tokens =  await this.tokens.concat({token:token})

         await this.save() 
         return token
     } catch(err){
         console.log(err)
     }
}



module.exports= mongoose.model('students', studentSchema)


 