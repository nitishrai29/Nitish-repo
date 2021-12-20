const mongoose = require('mongoose')

let userSchema= new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name: String,
    company: String,
    location:String,
    age:Number,
})

module.exports= mongoose.model('users', userSchema)