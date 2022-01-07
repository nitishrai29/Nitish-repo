const mongoose= require('mongoose')

const DbConn = ()=>{
    mongo.connect('mongodb://localhost:27017/ecomerce',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err));}

module.exports={DbConn};