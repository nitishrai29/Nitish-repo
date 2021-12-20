const data = require('../Models/users')


const delUser =(req,res)=>{
    
    data.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result)
        console.log("deleted successfully")
    })

    .catch(err=>{
        console.log(err)
    })
}

module.exports={delUser}