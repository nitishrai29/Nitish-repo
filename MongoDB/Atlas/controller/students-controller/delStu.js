const data = require('../../Models/Student')


const delStu =(req,res)=>{
    
    data.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result)
        console.log("deleted successfully")
    })

    .catch(err=>{
        console.log(err)
    })
}

module.exports={delStu}
