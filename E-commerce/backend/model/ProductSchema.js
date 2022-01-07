
const mongoose =require('mongoose');
const req = require('express/lib/request');


const productSchema = new mongoose.Schema({
    name:{
        type: String
    },
    model:{
        type: String,
        trim: true
    },
    categoryId:{
        type :Number
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    quantity:{
        type:Number,
        require:true,
        trim:true
    },

    image: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },


})


module.exports= mongoose.model('Productschema',productSchema)


