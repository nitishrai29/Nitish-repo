const data = require('../../Models/Student')

const addStu = async (req, res) => {
    
    const user = req.body;
    const check= await data.findOne({email:user.email})
    const newUser = new data(user);
    try{
        if(check){
           res.json({message:"user already exist"})
        }else{
        await newUser.save();
        res.status(201).json(newUser);
        }
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

module.exports={addStu}