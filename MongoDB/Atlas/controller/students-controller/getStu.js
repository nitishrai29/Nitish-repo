const data = require('../../Models/Student')


const getStu=(req,res)=>{

    data.find({}).select({}).sort({name:1}).
    then((user)=>{
        res.json(user)
    })
}


module.exports= {getStu}