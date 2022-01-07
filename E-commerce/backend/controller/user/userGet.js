const Users = require('..//../model/UserModel')


const userGet=(req,res)=>{

    Users.find().then((user)=>{
        res.json(user)
    })
}


module.exports= {userGet}



