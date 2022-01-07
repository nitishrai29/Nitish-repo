const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    userName:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        default:false
    },

    cnfrmPassword:{
        type:String,
        required:true,
        default:false
    },

    role:{
        type:String,
        default:0
    },

    cart:{
        type:Array,
        default:[]
    },
},
{
    timestamps:true
}

)



userSchema.pre('save', async function(next){
    
    
    this.password = await bcrypt.hash(this.password,10);
       
    this.cnfrmPassword = undefined
    
    next()
    
}) 


module.exports= mongoose.model('userSchema',userSchema)

