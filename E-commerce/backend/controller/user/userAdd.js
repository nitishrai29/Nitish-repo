const Users = require('..//../model/UserModel')
const mongoose = require('mongoose');

const addUser = async (req, res) => {
    


    try {
        const user= await Users.findOne({email:req.body.email})

        if(user){
            return res.status(400).json({message:"this email already exists"})
        }else{

            
            const password = req.body.password;
            const cnfrmPassword = req.body.cnfrmPassword;

            if(password.lenght<6){
                return res.status(400).json({message:"Password Should be atleast 6 character long"})
            }else{

                if (password === cnfrmPassword) {
                    const data = new user({
                    // _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    email: req.body.email,
                    userName: req.body.userName,
                    password:password,
                    cnfrmPassword:cnfrmPassword
                    
                })
                //  console.log("the sucess part:" + data)
    
                // const token = await  data.generateAuthToken();
                // console.log("the token part is:" + token )
    
               
                data.save().then((result) => {
                    res.status(201).json(result);
                    console.warn("data added successfully in api is:" + data)
                })
    
    
            }
            else {
                res.send("password mis-match")
            }
    
            }

            
        }
        
    }
    catch (error) {
        res.status(400).send(error);
    }


}

module.exports={addUser}