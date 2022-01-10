const Users = require('..//../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userAdd =async(req,res)=>{
    try{
        const {name,email,password}= req.body

        const user = await Users.findOne({email})
        if(user){
            return res.status(400).json({msg:"this email already exists"})
        }

        if(password.length<6){
            return res.status(400).json({message:"Password should be atleast 6 Character Long"})
        }

        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new Users({
            name,email,password:hashPassword
        })

        await newUser.save()
        const accessToken = createAccessToken({id: newUser._id})
        const refreshToken = createRefreshToken({id: newUser._id})
        res.cookie('refreshtoken', refreshToken,{
            httpOnly:true,
            path : '/refresh_token'
        })
 

        return res.json({message:"register Success"})

    }catch(err){
        return res.status(500).json({error: err.message})
    }

}

const refreshToken = async(req,res)=>{
    try{
        const rf_token = req.cookies.refreshToken
        if(!rf_token){
            return res.status(400).json({message:'nothing found'})
        }else{
            jwt.verify(rf_token,process.env.REFRESH_TOKEN,(err,user)=>{
                if(err){
                    res.status(500).json({message:"login or register now"})
                    const accesstoken = createAccessToken({id: user.id})
                    return res.json({user,accesstoken})
                }
            })
            return res.json({rf_token})
        }
    }catch(err){
        return res.status(500).json({error: err.message})

    }
}



const createAccessToken = (user)=>{
    return jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1d'})
}

const createRefreshToken = (user)=>{
    return jwt.sign(user, process.env.REFRESH_TOKEN, {expiresIn: '7d'})
}

module.exports={userAdd, refreshToken}