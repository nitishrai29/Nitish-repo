const express=require('express')
const app = express();
const data = require('../../Models/Student')
const bcrypt= require('bcryptjs')

const login = (req, res) => {

    const {email,password}=req.body


    data.findOne({email:email},async(err,user)=>{
        if(user){
            const match = await bcrypt.compare(password,user.password)
            if(match){
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
   

    // const user =  data.findOne({email:email})

    // if(user){
    //     const match = await bcrypt.compare(password,user.password)

    //     if(match){
    //         res.send({message:"Login Successfull"})
    //     }
    //     else{
    //         res.send({message:"password doesnt match"})
    //     }
        
    // }else{
    //      res.send({message:"user not matched"})
    //     res.redirect('/login')
    // }
    
    
    
    
} 
module.exports = {
    login
 }
