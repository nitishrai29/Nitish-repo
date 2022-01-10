const Users = require('..//../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUser=async(req,res)=>{
    try {
        const user = await Users.findById(req.user.id).select('password')
        if(!user){
            return res.status(500).json({message:"user does not exists"})

        }
        else{
            return res.json(user)
        }
    } catch (error) {
        return res.status(500).json({error: err.message})
        
    }
}

module.exports={getUser}