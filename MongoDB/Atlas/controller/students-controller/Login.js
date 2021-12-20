const express=require('express')
const app = express();
const data = require('../../Models/Student')


const login = (req, res) => {

    const {email,password}=req.body
    
    data.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
            res.send({message:"Login succesfully",user:user})
        }
        else{
            res.send({message:"password doesnt match"})
        }
    
    
    }
        else{
            res.send({message:"user not matched"})
            res.redirect('/login')
        }

    } )
   
} 
module.exports = {
    login
 }
