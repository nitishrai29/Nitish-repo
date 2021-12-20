const data = require('../../Models/Student')


const getstuById=(req,res)=>{

    data.findOne({_id:req.params.id}).then((user)=>{
        res.json(user)
    })
}


module.exports= {getstuById}



