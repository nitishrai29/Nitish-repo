const data = require('../Models/users')


const getOne=(req,res)=>{

    data.findOne({_id:req.params.id}).then((user)=>{
        res.json(user)
    })
}


module.exports= {getOne}



