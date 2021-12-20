const data = require('../Models/users')


const updateUser=(req,res)=>{
    data.updateOne(
        {_id:req.params.id},
        {$set:{
            name:req.body.name,
            company:req.body.company,
            location:req.body.location,
            age:req.body.age
        }}
    ). then((data)=>{
        res.json(data)
        console.log('updated Successfully')
    }). catch((err)=>{
        console.log(err)
    })
}

module.exports={updateUser}