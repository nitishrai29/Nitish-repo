const User = require('..//../model/UserModel')


const userDel =(req,res)=>{
    
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result)
        console.log("deleted successfully")
    })

    .catch(err=>{
        console.log(err)
    })
}

module.exports={userDel}
