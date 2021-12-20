const data = require('../../Models/Student')


const getStu=(req,res)=>{

    data.find().then((user)=>{
        res.json(user)
    })
}


module.exports= {getStu}