const data = require('../../Models/Student')

const addStu = async (req, res) => {
    
    const user = req.body;

    const newUser = new data(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

module.exports={addStu}