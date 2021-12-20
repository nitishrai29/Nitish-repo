const data = require('../Models/users')


const addUser=(req,res)=>{
    const user = new data({
        // _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        company: req.body.company,
        location: req.body.location,
        age: req.body.age
    })

    user.save().then((result)=>{
        res.json(result)
        console.log(result)
    })
    .catch((err)=>console.log(err))
}

module.exports = {addUser}