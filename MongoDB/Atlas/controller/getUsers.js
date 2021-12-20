const data = require('../Models/users')


const getUser=(req,res)=>{

    data.find().then((user)=>{
        res.json(user)
    })
}


module.exports= {getUser}



