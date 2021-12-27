const jwt =  require('jsonwebtoken')
const data = require('..//../Models/Student')

const Authenticate=async (req,res,next)=>{
    try{
        const token = req.cookies.jwtToken
        const verification = jwt.verify(token, "abcdefghijklmnopqrstuvwxyzabcdef")

        const user  = await data.findOne({_id:verification._id, "tokens.token":token})

        if(!user){
            console.log("user not found")
        }

        req.token=token;
        req.user=user;
        req.userID=user._id

        next()
    }catch(err){
        console.log(err)
    }
}

module.exports = Authenticate;