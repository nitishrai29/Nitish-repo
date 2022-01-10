const Users = require('..//../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const logout=async(req,res)=>{
    try {
        res.clearCookie('refreshtoken',{path:'/refreshToken'})
        return res.json({message:"You have been logged Out"})
    } catch (err) {
        return res.status(500).json({error: err.message})
        
    } 
}

module.exports={logout}