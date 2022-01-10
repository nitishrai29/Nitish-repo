const Users = require('..//../model/UserModel')
const bcrypt = require('bcryptjs')

const login=async(req,res)=>{
    try {
        const {email,password}= req.body

        const user = await Users.findOne({email})

        if(!user){
            return res.status(400).json({message:"user does not exists"})
        }else{
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({message:"incorrect password"})
            }else{
                return res.status(200).json({message:"login sucessful password"})
            }
        }

        
    } catch (error) {
        return res.status(500).json({error: err.message})
        
    }
}

module.exports={login}
